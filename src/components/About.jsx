const About = () => {
  return (
    <section className="px-8 py-20 border-b border-white/5 min-h-screen">
      <p className="text-xs tracking-widest text-white/40 uppercase mb-12">about</p>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            I'm <span className="text-white">Giacomo</span>, a <span className="underline">self-taught developer</span> and <span className="underline">Business Administration student</span> at the University of Catania. I started coding out of curiosity and never stopped.
          </p>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            I care about building software that has <span className="text-white">solid logic and clean interfaces</span> — whether it's a web app, a game, or a command line tool.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
          I enjoy <span className="text-white">learning new things</span> and exploring different areas, especially software development, cybersecurity, <span className="text-white">economics</span>, business administration and how every kind of systems works. I'm always looking for opportunities to learn, grow, experiment, and contribute to meaningful projects.
          </p>
        </div>
        <div className="my-3">
            <p className="text-xs tracking-widest text-white/20 uppercase mb-3">education</p>
            <p className="text-sm text-white">Bachelor's Degree in Business Administration</p>
            <p className="text-sm text-white/60">Department of Economics and Business · University of Catania</p>
            <p className="text-sm text-white/60 uppercase">oct 2019 - Current</p>
            <p className="text-sm text-white">High School Diploma</p>
            <p className="text-sm text-white/60">Liceo Scientifico Statle "Leonardo" - Giarre(CT)</p>
            <p className="text-sm text-white/60 uppercase">sep 2014 - Jun 2019</p>
            <div className="my-3">
            <p className="text-xs tracking-widest text-white/20 uppercase mb-3">certificates</p>
            <p className="text-sm text-white">Cisco - Python Essentials 1</p>
            <p className="text-sm text-white">Cisco - Javascript Essentials 1</p>
            <p className="text-sm text-white">Cisco - Javascript Essentials 2</p>
            </div>
        </div>
        {/* <div className="my-3">
          <p className="text-xs tracking-widest text-white/20 uppercase mb-3">certifications</p>
        </div> */}
        <div>
           <p className="text-xs tracking-widest text-white/20 uppercase mb-3">Experience</p>
           <p className="text-sm text-white uppercase">GLOVO - FOODINHO S.R.L. &#183; Delivery Driver</p>
           <p className="text-sm text-white/60 uppercase">Oct 2022 &#183; April 2023</p><br />
           <p className="text-sm text-white/60">Gained firsthand experience in gig economy dynamics as a Glovo delivery rider — managing time, adapting to variable demand, and operating with full autonomy.</p><br />
           <p className="text-sm text-white uppercase">tria tech arch & Eng &#183; Office & it assistant</p>
           <p className="text-sm text-white/60 uppercase">Sept 2023 &#183; December 2024</p><br />
           <p className="text-sm text-white/60">Provided general administrative and technical support in a small business environment. Handled document management, filing, and day-to-day office tasks alongside hands-on troubleshooting of software issues, network connectivity, printers, and hardware — often the first point of contact whenever something stopped working.</p><br />
           <p className="text-sm text-white uppercase">La torretta ristopub &#183; Bartender</p>
           <p className="text-sm text-white/60 uppercase">June 2025 &#183; July 2025</p><br />
           <p className="text-sm text-white/60">Worked in a fast-paced bar environment, managing customer orders, cash handling, and service during high-volume shifts. Developed speed, multitasking, and the ability to stay composed under pressure.</p>
        </div>
        <div>
          <div className="my-3">
            <p className="text-xs tracking-widest text-white/20 uppercase mb-3">location</p>
            <p className="text-sm text-white/60">Riposto (CT), Sicily</p>
          </div>
          <div className="my-3">
            <p className="text-xs tracking-widest text-white/20 uppercase mb-3">interests</p>
            <p className="text-sm text-white/60">Traveling, Reading (Fiction and Non-Fiction), Video Games,  Coding, Economics and Finance, Music, Fitness and Nutrition, Open Source, Philosopy, Psychology </p>
          </div>
          <div className="my-3">
            <p className="text-xs tracking-widest text-white/20 uppercase mb-3">open to</p>
            <p className="text-sm text-white/60">Internships, Junior Developer Roles but also open to anything that can help me grow as a professional.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About