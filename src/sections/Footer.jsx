import { motion } from "motion/react";
import { mySocials } from "../constants";
import { MagneticButton } from "../components/MagneticButton";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-8 pt-16 text-sm text-neutral-400 c-space overflow-hidden">
      <motion.div 
        className="mb-2 bg-gradient-to-r from-transparent via-aqua/40 to-transparent h-[1px] w-full" 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <p className="text-lg font-semibold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent">
        Gursirat Singh
      </p>
      <p className="text-neutral-500 text-xs tracking-widest uppercase">Full-Stack Developer · Designer · Problem Solver</p>
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <MagneticButton
            as="a"
            href={social.href || "#"}
            key={index}
            aria-label={`Visit ${social.name}`}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/[0.06] hover:border-aqua/40 hover:bg-aqua/10 transition-all duration-300"
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </MagneticButton>
        ))}
      </div>
      <p className="text-neutral-500 text-xs">© {new Date().getFullYear()} Gursirat Singh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
