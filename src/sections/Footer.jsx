import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href || "#"}
            key={index}
            aria-label={`Visit ${social.name}`}
            className="hover:scale-110 transition-transform"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Gursirat Singh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
