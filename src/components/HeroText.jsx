import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
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
      <div className="flex-col hidden md:flex">
        <motion.h1
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm Gursirat
        </motion.h1>
        <div className="flex flex-col items-start space-y-2">
          <motion.p
            className="text-6xl font-bold leading-tight text-neutral-400"
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
              className="font-black text-9xl"
              style={{
                background: 'linear-gradient(90deg, #33c2cc, #57db96, #5c33cc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(51, 194, 204, 0.5))'
              }}
            />
          </motion.div>
          <motion.p
            className="text-5xl font-bold leading-tight text-neutral-400"
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
          <button
            onClick={handleScrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-aqua to-mint text-black font-bold rounded-full hover:from-mint hover:to-aqua transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-aqua/50"
          >
            Explore My Work
          </button>
          <a
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
            className="px-8 py-4 border-2 border-aqua text-aqua font-bold rounded-full hover:bg-aqua hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm Gursirat
        </motion.h1>
        <div className="space-y-2">
          <motion.p
            className="text-4xl font-bold text-neutral-400"
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
              className="font-bold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent text-6xl"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-bold text-neutral-400"
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
            onClick={handleScrollToAbout}
            className="px-6 py-3 bg-gradient-to-r from-aqua to-mint text-black font-bold rounded-full hover:from-mint hover:to-aqua transition-all duration-300 transform hover:scale-105"
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
            className="px-6 py-3 border-2 border-aqua text-aqua font-bold rounded-full hover:bg-aqua hover:text-black transition-all duration-300 transform hover:scale-105"
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
