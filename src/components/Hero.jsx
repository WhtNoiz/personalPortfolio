const Hero = ({ heroText, handleNav, scrolled }) => {
  return (
    <section className={`px-8 border-b border-white/5 transition-all duration-500 ${scrolled ? 'py-4' : 'py-20'}`}>
      <p className={`text-xs tracking-widest text-white/40 uppercase transition-all duration-500 ${scrolled ? 'mb-1' : 'mb-5'}`}>
        Business Administration Student, Developer · Riposto, Sicilia
      </p>
      <h1 className={`font-bold tracking-tight leading-none flex items-center transition-all duration-500 ${scrolled ? 'text-3xl mb-0' : 'text-7xl mb-4'}`}>
        {heroText}
        <span className={`inline-block w-1 bg-[#c43e46] ml-2 cursor-blink transition-all duration-500 ${scrolled ? 'h-7' : 'h-16'}`} />
      </h1>
      <p className={`text-white/40 font-normal transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0 mb-0' : 'max-h-20 opacity-100 text-2xl mb-8'}`}>
        I build software and study economics — apparently I enjoy debugging both code and capitalism
      </p>
      <div className={`flex gap-3 transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'}`}>
        <button
          onClick={() => handleNav('projects')}
          className="bg-[#c43e46] text-[#0e0e0f] text-sm font-bold px-6 py-3 rounded-md hover:bg-[#ff6b6b] transition-colors cursor-pointer"
        >
          Take a look at my projects
        </button>
        <button
          onClick={() => handleNav('contacts')}
          className="text-sm font-medium px-6 py-3 rounded-md border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
        >
          Write me
        </button>
      </div>
    </section>
  )
}

export default Hero