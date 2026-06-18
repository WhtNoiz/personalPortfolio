import { useState, useEffect } from 'react'

const safeOpen = (url) => {
  if (/^https?:\/\//i.test(url)) window.open(url, '_blank', 'noopener,noreferrer')
}

const ProjectCard = ({ project }) => {
  return (
    <div className="border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-bold text-white">{project.name}</h3>
        {project._collaborated && (
          <span className="text-xs bg-[#c8f04d]/10 text-[#c8f04d] border border-[#c8f04d]/20 px-2 py-0.5 rounded">
            collab
          </span>
        )}
      </div>
      <p className="text-sm text-white/40 leading-relaxed mb-4">
        {project.description || 'No description provided.'}
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.language && (
          <span className="text-xs bg-white/5 text-white/40 border border-white/5 px-2 py-1 rounded">
            {project.language}
          </span>
        )}
        {project.topics?.map(topic => (
          <span key={topic} className="text-xs bg-white/5 text-white/40 border border-white/5 px-2 py-1 rounded">
            {topic}
          </span>
        ))}
      </div>
        <div className="flex gap-4 items-center">
        <button
            onClick={() => safeOpen(project.html_url)}
            className="text-xs text-[#c43e46] hover:text-white transition-colors"
          >
            github
          </button>
          {project.homepage && (
            <button
              onClick={() => safeOpen(project.homepage)}
              className="text-xs text-[#c43e46] hover:text-white transition-colors"
            >
              live demo
            </button>
          )}
            <span className="text-xs text-white/20 ml-auto">★ {project.stargazers_count}</span>
          </div>
    </div>
  )
}

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    const own = fetch('https://api.github.com/users/WhtNoiz/repos?sort=updated&per_page=100', { signal })
      .then(res => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })

    const contributed = fetch('https://api.github.com/search/repositories?q=contributor:WhtNoiz&sort=updated&per_page=10', { signal })
      .then(res => {
        if (!res.ok) throw new Error('GitHub search API error')
        return res.json()
      })
      .then(data => data.items || [])

    Promise.all([own, contributed])
      .then(([ownRepos, contribRepos]) => {
        const ownFiltered = ownRepos.filter(r => !r.fork)

        const ownIds = new Set(ownFiltered.map(r => r.id))
        const contribFiltered = contribRepos.filter(r => !ownIds.has(r.id))

        const all = [
          ...ownFiltered,
          ...contribFiltered.map(r => ({ ...r, _collaborated: true }))
        ]

        setProjects(all)
        setLoading(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      })

    return () => controller.abort()
  }, [])

  return (
    <section className="px-8 py-20 border-b border-white/5 min-h-screen">
      <p className="text-xs tracking-widest text-white/40 uppercase mb-8">projects</p>

      {loading && (
        <p className="text-sm text-white/30 animate-pulse">fetching repos...</p>
      )}

      {error && (
        <p className="text-sm text-red-400">Could not load repos: {error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects