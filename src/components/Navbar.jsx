const Navbar = ({ handleNav }) => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-white/5">
      <span className="text-sm font-bold tracking-wide">
        <button onClick={() => handleNav('home')} className="text-white/80 hover:text-white transition-colors cursor-pointer">gb<span className="text-[#c8f04d]">.</span>dev</button>
      </span>
      <div className="flex gap-6">
        <button onClick={() => handleNav('projects')} className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">projects</button>
        <button onClick={() => handleNav('skills')} className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">skills</button>
        <button onClick={() => handleNav('about')} className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">about</button>
        <button onClick={() => handleNav('contacts')} className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">contacts</button>
      </div>
    </nav>
  )
}

export default Navbar