import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-32 md:text-left px-5 lg:px-15">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex items-start">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
          <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
            Available for new opportunities
            <span className="inline-block w-1.5 h-3 ml-1.5 bg-aqua animate-pulse align-middle opacity-80" />
          </span>
        </motion.div>
        
        <motion.h1
          className="text-6xl lg:text-7xl font-bold mb-4 tracking-tighter bg-gradient-to-br from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm Gursirat
        </motion.h1>
        <div className="flex flex-col items-start space-y-1">
          <motion.p
            className="text-5xl lg:text-6xl font-semibold leading-tight text-neutral-400 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1, duration: 0.8 }}
            className="drop-shadow-lg"
          >
              <FlipWords
              words={words}
              className="font-black text-8xl lg:text-9xl tracking-tighter"
              style={{
                background: 'linear-gradient(90deg, #ffffff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(167, 139, 250, 0.4))'
              }}
            />
          </motion.div>
          <motion.p
            className="text-5xl lg:text-6xl font-semibold leading-tight text-neutral-400 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
        <motion.div
          className="mt-8 flex gap-6"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <MagneticButton
            onClick={handleScrollToWork}
            className="relative overflow-hidden px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium rounded-full transition-all duration-300 transform hover:shadow-[0_0_40px_rgba(167,139,250,0.3)] hover:border-aqua/50 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-aqua/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.offsetTop - offset;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-4 bg-transparent text-neutral-300 hover:text-white font-medium rounded-full transition-colors duration-300 flex items-center cursor-pointer"
          >
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden items-center text-center">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
          <span className="text-[10px] font-medium text-neutral-300 tracking-wide uppercase">
            Available for work
            <span className="inline-block w-1 h-2 ml-1 bg-aqua animate-pulse align-middle opacity-80" />
          </span>
        </motion.div>
        
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent tracking-tighter animate-text-shimmer bg-[length:200%_auto]"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm Gursirat
        </motion.h1>
        <div className="space-y-1">
          <motion.p
            className="text-3xl font-semibold text-neutral-400 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <FlipWords
              words={words}
              className="font-black text-6xl tracking-tighter"
              style={{
                background: 'linear-gradient(90deg, #ffffff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 15px rgba(167, 139, 250, 0.4))'
              }}
            />
          </motion.div>
          <motion.p
            className="text-3xl font-semibold text-neutral-400 tracking-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Web Applications
          </motion.p>
        </div>
        <motion.div
          className="mt-6 flex flex-col gap-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <button
            onClick={handleScrollToWork}
            className="relative overflow-hidden px-8 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium rounded-full transition-all duration-300"
          >
            Explore My Work
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.offsetTop - offset;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="px-8 py-3 text-neutral-300 font-medium hover:text-white transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => {
          const element = document.getElementById('about');
          if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-6 h-10 border-2 border-aqua rounded-full flex justify-center group-hover:border-mint transition-colors duration-300">
          <motion.div
            className="w-1 h-3 bg-aqua rounded-full mt-2 group-hover:bg-mint transition-colors duration-300"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.button>
    </div>
  );
};

export default HeroText;
