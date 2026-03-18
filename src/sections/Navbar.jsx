import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

function Navigation({ activeSection, isMobile = false, onLinkClick = () => {} }) {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      onLinkClick();
    }
  };

  const fontStyle = { fontFamily: "'Inter', 'SF Pro Display', sans-serif" };

  if (isMobile) {
    return (
      <ul className="space-y-1">
        {navLinks.map((link) => (
          <li key={link.id}>
            <motion.button
              className={`relative w-full text-left text-xl py-3 px-5 rounded-xl font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-white bg-white/[0.06] border border-aqua/20'
                  : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
              }`}
              style={fontStyle}
              onClick={() => handleScroll(link.id)}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                {activeSection === link.id && (
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-aqua"
                    layoutId="mobileDot"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
                )}
                {link.label}
              </span>
            </motion.button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex items-center bg-white/[0.03] border border-white/[0.06] rounded-full px-1.5 py-1.5 gap-1">
      {navLinks.map((link) => (
        <li key={link.id}>
          <motion.button
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeSection === link.id
                ? 'text-white'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
            style={fontStyle}
            onClick={() => handleScroll(link.id)}
            whileTap={{ scale: 0.95 }}
          >
            {/* Active pill background */}
            {activeSection === link.id && (
              <motion.div
                className="absolute inset-0 rounded-full"
                layoutId="activeNavPill"
                style={{
                  background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.2))',
                  border: '1px solid rgba(167,139,250,0.25)',
                  boxShadow: '0 0 20px rgba(167,139,250,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </motion.button>
        </li>
      ))}
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <motion.div
        className={`fixed inset-x-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? 'backdrop-blur-2xl shadow-2xl'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(167, 139, 250, 0.1)' : 'none'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-15">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.a
              href="/"
              className="group flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Monogram badge */}
              <div className="relative">
                {/* Glow behind badge */}
                <div className="absolute inset-0 bg-aqua/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Badge container */}
                <div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.25))',
                    border: '1px solid rgba(167,139,250,0.3)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                  }}
                >
                  <span
                    className="text-lg font-black bg-gradient-to-br from-aqua via-lavender to-mint bg-clip-text text-transparent"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    G
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span
                  className="text-base lg:text-lg font-bold tracking-tight text-white group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:to-mint group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Gursirat
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-500 group-hover:text-aqua/60 transition-colors duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Developer
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <Navigation activeSection={activeSection} />
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white rounded-xl border border-white/[0.06] hover:border-aqua/30 hover:bg-white/[0.04] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-5 h-4">
                <span className={`absolute w-5 h-[1.5px] bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 top-[7px]' : 'top-0'
                }`} />
                <span className={`absolute w-5 h-[1.5px] bg-current transition-all duration-300 top-[7px] ${
                  isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`absolute w-5 h-[1.5px] bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 top-[7px]' : 'top-[14px]'
                }`} />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, #a78bfa, #f59e0b, #7c3aed)',
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 backdrop-blur-2xl shadow-2xl"
              style={{
                backgroundColor: 'rgba(10, 10, 15, 0.95)',
                borderLeft: '1px solid rgba(167, 139, 250, 0.12)'
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white rounded-xl border border-white/[0.06] hover:border-aqua/30 hover:bg-white/[0.04] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Mobile Logo */}
                <div className="flex items-center gap-3 mb-10 px-2">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.25))',
                      border: '1px solid rgba(167,139,250,0.3)',
                    }}
                  >
                    <span className="text-sm font-black bg-gradient-to-br from-aqua to-mint bg-clip-text text-transparent">G</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Gursirat</p>
                    <p className="text-[9px] tracking-[0.15em] uppercase text-neutral-500">Portfolio</p>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav>
                  <Navigation activeSection={activeSection} isMobile={true} onLinkClick={() => setIsOpen(false)} />
                </nav>

                {/* Social Links */}
                <div className="mt-auto flex justify-center gap-3 pt-6 border-t border-white/[0.06]">
                  <a href="#" className="w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-aqua rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-aqua/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-aqua rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-aqua/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-aqua rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-aqua/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
