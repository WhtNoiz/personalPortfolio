import { useState, useCallback, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contacts from './components/Contacts'

const SECTIONS = {
  home: 'Giacomo Butera',
  projects: 'projects',
  skills: 'skills',
  about: 'about',
  contacts : 'contacts',
}

const App = () => {
  const [heroText, setHeroText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const name = 'Giacomo Butera'
    let i = 0
    const write = setInterval(() => {
      i++
      setHeroText(name.slice(0, i))
      if (i >= name.length) clearInterval(write)
    }, 80)
    return () => clearInterval(write)
  }, [])

  const sentinelRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    const el = sentinelRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const triggerType = useCallback((section, onDone) => {
    if (isAnimating) return
    setIsAnimating(true)
    const next = SECTIONS[section]
    if (!next) {
      setIsAnimating(false)
      return
    }
    const current = heroText
    let i = current.length
    const erase = setInterval(() => {
      i--
      setHeroText(current.slice(0, i))
      if (i <= 0) {
        clearInterval(erase)
        let j = 0
        const write = setInterval(() => {
          j++
          setHeroText(next.slice(0, j))
          if (j >= next.length) {
            clearInterval(write)
            setIsAnimating(false)
            if (onDone) onDone()
          }
        }, 80)
      }
    }, 40)
  }, [isAnimating, heroText])

  const handleNav = (section) => {
    triggerType(section, () => setActiveSection(section))
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'projects': return <Projects />
      case 'skills': return <Skills />
      case 'about': return <About />
      case 'contacts': return <Contacts />
      default: return null
    }
  }

  return (
    <div className="relative">
      <div ref={sentinelRef} className="absolute top-[60px] h-px" aria-hidden="true" />
      <div className="sticky top-0 z-10 bg-[#0e0e0f]">
        <Navbar handleNav={handleNav} />
        <Hero heroText={heroText} handleNav={handleNav} scrolled={scrolled} />
      </div>
      <div>
        {renderSection()}
      </div>
    </div>
  )
}

export default App