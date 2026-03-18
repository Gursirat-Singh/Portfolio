import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-8 pt-16 text-sm text-neutral-400 c-space">
      <div className="mb-2 bg-gradient-to-r from-transparent via-aqua/40 to-transparent h-[1px] w-full" />
      <p className="text-lg font-semibold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent">
        Gursirat Singh
      </p>
      <p className="text-neutral-500 text-xs tracking-widest uppercase">Full-Stack Developer · Designer · Problem Solver</p>
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href || "#"}
            key={index}
            aria-label={`Visit ${social.name}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/[0.06] hover:border-aqua/40 hover:bg-aqua/10 hover:scale-110 transition-all duration-300"
          >
            <img src={social.icon} className="w-4 h-4" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-neutral-500 text-xs">© 2025 Gursirat Singh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
