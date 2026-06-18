import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
    return (
        <section className="px-8 py-20 border-b border-white/5 min-h-screen">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-12">contacts</p>
            <div className="flex flex-col gap-4">
                <a
                    href="mailto:giacomo.66@live.com"
                    className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                >
                    <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center group-hover:border-[#c43e46] transition-colors">
                        <FaEnvelope className="text-lg text-[#b41010]" />
                    </div>
                    <div>
                        <p className="text-xs text-white/20 uppercase tracking-widest mb-0.5">email</p>
                        <p className="text-sm">giacomo.66@live.com</p>
                    </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/giacomo-butera-2b1078291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                >
                    <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center group-hover:border-[#c43e46] transition-colors">
                        <FaLinkedin className="text-lg text-[#b41010]" />
                    </div>
                    <div>
                        <p className="text-xs text-white/20 uppercase tracking-widest mb-0.5">linkedin</p>
                        <p className="text-sm">Giacomo Butera</p>
                    </div>
                </a>

                <a
                    href="https://github.com/WhtNoiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                >
                    <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center group-hover:border-[#c43e46] transition-colors">
                        <FaGithub className="text-lg text-[#b41010]" />
                    </div>
                    <div>
                        <p className="text-xs text-white/20 uppercase tracking-widest mb-0.5">github</p>
                        <p className="text-sm">WhtNoiz</p>
                    </div>
                </a>

                <a
                    href="https://tryhackme.com/p/WhtNoiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                >
                    <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center group-hover:border-[#c43e46] transition-colors">
                        <img
                            src="https://tryhackme.com/img/favicon.png"
                            alt="TryHackMe"
                            className="w-5 h-5"
                        />
                    </div>
                    <div>
                        <p className="text-xs text-white/20 uppercase tracking-widest mb-0.5">tryhackme</p>
                        <p className="text-sm">WhtNoiz</p>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Contacts;
