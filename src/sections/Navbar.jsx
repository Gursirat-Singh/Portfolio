import { useState, useEffect } from "react";
import { motion } from "motion/react";
function Navigation({ activeSection, isMobile = false, onLinkClick = () => {} }) {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = isMobile ? 80 : 80; // offset for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      onLinkClick(); // Close mobile menu
    }
  };

  const baseClasses = "relative font-medium transition-all duration-300";
  const desktopClasses = "text-lg hover:text-white hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(51,194,204,0.6)]";
  const mobileClasses = "text-2xl py-3 px-4 rounded-lg hover:bg-white/10 hover:drop-shadow-[0_0_8px_rgba(51,194,204,0.6)] w-full text-left";
  const fontStyle = { fontFamily: "'SF Pro Display', sans-serif" };

  return (
    <ul className={`${isMobile ? 'space-y-2' : 'flex space-x-8'}`}>
      <li>
        <motion.button
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${
            activeSection === 'home'
              ? 'text-white bg-gradient-to-r from-aqua/20 to-mint/20 rounded-lg'
              : 'text-neutral-400'
          }`}
          style={fontStyle}
          onClick={() => handleScroll('home')}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
          {activeSection === 'home' && !isMobile && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua to-mint"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      </li>
      <li>
        <motion.button
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${
            activeSection === 'about'
              ? 'text-white bg-gradient-to-r from-aqua/20 to-mint/20 rounded-lg'
              : 'text-neutral-400'
          }`}
          style={fontStyle}
          onClick={() => handleScroll('about')}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
          {activeSection === 'about' && !isMobile && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua to-mint"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      </li>
      <li>
        <motion.button
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${
            activeSection === 'work'
              ? 'text-white bg-gradient-to-r from-aqua/20 to-mint/20 rounded-lg'
              : 'text-neutral-400'
          }`}
          style={fontStyle}
          onClick={() => handleScroll('work')}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Work
          {activeSection === 'work' && !isMobile && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua to-mint"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      </li>
      <li>
        <motion.button
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${
            activeSection === 'resume'
              ? 'text-white bg-gradient-to-r from-aqua/20 to-mint/20 rounded-lg'
              : 'text-neutral-400'
          }`}
          style={fontStyle}
          onClick={() => handleScroll('resume')}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
          {activeSection === 'resume' && !isMobile && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua to-mint"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      </li>
      <li>
        <motion.button
          className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses} ${
            activeSection === 'contact'
              ? 'text-white bg-gradient-to-r from-aqua/20 to-mint/20 rounded-lg'
              : 'text-neutral-400'
          }`}
          style={fontStyle}
          onClick={() => handleScroll('contact')}
          whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
          {activeSection === 'contact' && !isMobile && (
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua to-mint"
              layoutId="activeTab"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </motion.button>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const sections = ['home', 'about', 'work', 'resume', 'contact'];
      const scrollPosition = scrollY + 100;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        className={`fixed inset-x-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl shadow-2xl'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(3, 4, 18, 0.8)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-15">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2 text-2xl lg:text-3xl font-bold uppercase bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent transition-all duration-300 hover:from-mint hover:to-aqua hover:scale-105"
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-aqua">&#60;</span>
              <span>Gursirat</span>
              <span className="text-mint">&#62;</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <Navigation activeSection={activeSection} />
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-5">
                <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-2' : 'top-0'
                }`} />
                <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 top-2 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-2' : 'top-4'
                }`} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-aqua to-mint"
          style={{
            scaleX: 0,
            transformOrigin: '0%',
          }}
          animate={{
            scaleX: (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) || 0
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute right-0 top-0 h-full w-80 backdrop-blur-xl shadow-2xl"
          style={{
            backgroundColor: 'rgba(3, 4, 18, 0.95)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6">
              <Navigation activeSection={activeSection} isMobile={true} onLinkClick={() => setIsOpen(false)} />
            </nav>

            {/* Social Links */}
            <div className="mt-auto flex justify-center space-x-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
