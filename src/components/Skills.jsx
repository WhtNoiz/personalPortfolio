import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section className="px-8 py-20 border-b border-white/5 min-h-screen">
      <p className="text-xs tracking-widest text-white/40 uppercase mb-12">skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map(group => (
          <div key={group.category}>
            <p className="text-xs tracking-widest text-white/20 uppercase mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span
                  key={item}
                  className="text-sm text-white/60 bg-white/5 border border-white/5 px-3 py-1.5 rounded hover:border-[#c8f04d]/30 hover:text-white transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills