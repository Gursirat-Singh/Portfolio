import { motion, useScroll, useTransform } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { myProjects } from "../constants";
import { useEffect, useRef, useState } from "react";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const project = myProjects.find(p => p.id === parseInt(projectId));

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Preload the project image
    if (project) {
      const img = new Image();
      img.src = project.image;
      img.onload = () => setImageLoaded(true);
    }
  }, [project]);

  if (!project) {
    return (
      <motion.div
        className="min-h-screen bg-primary flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-aqua to-mint bg-clip-text text-transparent mb-6"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            404
          </motion.h1>
          <h2 className="text-2xl font-semibold text-white mb-4">Project Not Found</h2>
          <p className="text-neutral-400 mb-8 max-w-md">
            The project you're looking for doesn't exist or may have been moved.
          </p>
          <motion.button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-aqua to-mint text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-aqua/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back Home
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-navy to-indigo relative overflow-x-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Primary animated orbs */}
        <motion.div
          className="absolute -top-64 -right-64 w-96 h-96 bg-aqua/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-64 -left-64 w-96 h-96 bg-royal/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Additional accent elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-mint/5 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-fuchsia/5 rounded-full blur-2xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-30 p-4 md:p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.button
          onClick={() => navigate('/')}
          className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/10 shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-aqua/20 transition-colors duration-300"
            whileHover={{ x: -3, rotate: -5 }}
          >
            <motion.span
              className="text-white/80 group-hover:text-white text-lg md:text-xl font-bold transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              ←
            </motion.span>
          </motion.div>
          <div className="text-left hidden sm:block">
            <div className="text-xs text-white/60">Back to</div>
            <div className="text-base font-semibold">Projects</div>
          </div>
          <div className="text-left sm:hidden">
            <div className="text-sm font-semibold">Back</div>
          </div>
        </motion.button>
      </motion.nav>

      <div className="relative z-10 pt-16">
        {/* Hero Section with improved responsiveness */}
        <motion.section
          ref={heroRef}
          className={`relative ${isMobile ? 'h-screen' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Simplified gradient overlays for better performance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

              {/* Subtle vignette effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content Overlay - Responsive layout */}
          <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-8">
            <motion.div
              className={`text-center ${isMobile ? 'py-8' : 'py-16'}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              {/* Category badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-medium text-aqua mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="w-1.5 h-1.5 bg-aqua rounded-full animate-pulse" />
                Featured Project
              </motion.div>

              {/* Main title with responsive typography */}
              <motion.h1
                className={`font-black text-white leading-tight tracking-tight mb-4 md:mb-6 ${
                  isMobile
                    ? 'text-4xl'
                    : 'text-5xl md:text-7xl lg:text-8xl'
                }`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-white via-white to-aqua bg-clip-text text-transparent">
                  {project.title}
                </span>
              </motion.h1>

              {/* Subtitle with responsive text */}
              <motion.p
                className={`font-light text-neutral-200 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 ${
                  isMobile
                    ? 'text-base px-4'
                    : 'text-lg md:text-xl lg:text-2xl'
                }`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {project.description}
              </motion.p>

              {/* Quick action buttons - responsive layout */}
              <motion.div
                className={`flex ${isMobile ? 'flex-col px-4' : 'flex-col sm:flex-row'} gap-3 md:gap-4 justify-center items-center`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                {project.href && (
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-aqua via-aqua to-mint text-white font-bold rounded-xl overflow-hidden ${
                      isMobile
                        ? 'px-6 py-3 text-sm w-full max-w-xs'
                        : 'px-8 py-4 text-base'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">View Live Project</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <img src="assets/arrow-up.svg" className={`rotate-45 ${isMobile ? 'w-4 h-4' : 'w-6 h-6'}`} />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-mint to-aqua opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.a>
                )}

                <motion.button
                  onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`group inline-flex items-center justify-center gap-2 md:gap-3 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 ${
                    isMobile
                      ? 'px-6 py-3 text-sm w-full max-w-xs'
                      : 'px-8 py-4 text-base'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-lg">↓</span>
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator - only show on desktop */}
          {!isMobile && (
            <motion.div
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  className="w-0.5 h-2 bg-aqua rounded-full mt-1.5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          )}
        </motion.section>

        {/* Content Section - Improved responsive layout */}
        <div className={`max-w-7xl mx-auto px-4 md:px-8 ${isMobile ? 'pb-8' : 'pb-16'}`}>
          {/* Project Overview */}
          <motion.section
            id="overview"
            className={`${isMobile ? 'mb-12' : 'mb-20'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.h2
                className={`font-bold text-white mb-4 flex items-center justify-center gap-3 md:gap-4 ${
                  isMobile
                    ? 'text-2xl'
                    : 'text-3xl md:text-4xl'
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className={`bg-aqua rounded-full ${isMobile ? 'w-1 h-8' : 'w-1 h-12'}`} />
                Project Overview
                <div className={`bg-aqua rounded-full ${isMobile ? 'w-1 h-8' : 'w-1 h-12'}`} />
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-transparent via-aqua to-transparent mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              {project.subDescription.map((subDesc, index) => (
                <motion.div
                  key={index}
                  className={`group flex gap-4 md:gap-6 p-4 md:p-6 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/15 hover:border-white/20 transition-all duration-300 ${
                    isMobile ? 'text-left' : ''
                  }`}
                  initial={{ opacity: 0, x: isMobile ? -20 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.0 + index * (isMobile ? 0.08 : 0.1),
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    x: isMobile ? 5 : 10,
                    scale: 1.005,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className={`bg-aqua rounded-full flex-shrink-0 ${isMobile ? 'w-2 h-2 mt-2' : 'w-3 h-3 mt-3'}`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.2 }}
                  />
                  <p className={`text-neutral-200 leading-relaxed ${
                    isMobile
                      ? 'text-base'
                      : 'text-lg md:text-xl'
                  }`}>
                    {subDesc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section
            className={`${isMobile ? 'mb-12' : 'mb-20'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.h2
                className={`font-bold text-white mb-4 flex items-center justify-center gap-3 md:gap-4 ${
                  isMobile
                    ? 'text-2xl'
                    : 'text-3xl md:text-4xl'
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <div className={`bg-mint rounded-full ${isMobile ? 'w-1 h-8' : 'w-1 h-12'}`} />
                Technology Stack
                <div className={`bg-mint rounded-full ${isMobile ? 'w-1 h-8' : 'w-1 h-12'}`} />
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-transparent via-mint to-transparent mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
            </motion.div>

            <div className={`grid gap-4 md:gap-6 ${
              isMobile
                ? 'grid-cols-2'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}>
              {project.tags.map((tag, index) => (
                <motion.div
                  key={tag.id}
                  className="group relative flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl md:rounded-2xl hover:border-aqua/30 hover:shadow-xl hover:shadow-aqua/10 transition-all duration-300 backdrop-blur-sm"
                  initial={{
                    opacity: 0,
                    scale: isMobile ? 0.9 : 0.8,
                    y: isMobile ? 10 : 20
                  }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1.6 + index * (isMobile ? 0.05 : 0.08),
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: isMobile ? 1.03 : 1.05,
                    y: isMobile ? -3 : -5,
                    boxShadow: "0 15px 30px rgba(51, 194, 204, 0.15)"
                  }}
                >
                  <motion.div
                    className={`bg-white/10 border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-aqua/20 transition-colors duration-300 ${
                      isMobile
                        ? 'w-12 h-12'
                        : 'w-14 h-14 md:w-16 md:h-16'
                    }`}
                    whileHover={{
                      rotate: isMobile ? 10 : 15,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className={isMobile ? 'w-6 h-6' : 'w-7 h-7 md:w-9 md:h-9'}
                    />
                  </motion.div>
                  <div className="text-center">
                    <span className={`text-white font-semibold block ${
                      isMobile
                        ? 'text-xs leading-tight'
                        : 'text-sm md:text-base'
                    }`}>
                      {tag.name}
                    </span>
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aqua/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Action Section - Enhanced CTA */}
          <motion.section
            className={`${isMobile ? 'py-8' : 'py-16'} border-t border-white/10`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
            >
              <h3 className={`font-bold text-white mb-2 ${
                isMobile ? 'text-xl' : 'text-2xl md:text-3xl'
              }`}>
                Ready to Explore?
              </h3>
              <p className="text-neutral-400 text-sm md:text-base">
                Check out the live project or return to see more work
              </p>
            </motion.div>

            <div className={`flex ${isMobile ? 'flex-col px-4' : 'flex-col sm:flex-row'} gap-4 md:gap-6 justify-center items-center max-w-4xl mx-auto`}>
              {project.href && (
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-full inline-flex items-center justify-center gap-3 md:gap-4 bg-gradient-to-r from-aqua via-aqua to-mint text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-aqua/30 transition-all duration-300 ${
                    isMobile
                      ? 'px-6 py-4 text-base'
                      : 'px-10 py-5 text-lg'
                  }`}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    boxShadow: "0 25px 50px rgba(51, 194, 204, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.0, duration: 0.5 }}
                >
                  <span className="relative z-10">View Live Project</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <img
                      src="assets/arrow-up.svg"
                      className={`rotate-45 ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-mint to-aqua opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.a>
              )}

              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-full inline-flex items-center justify-center gap-3 md:gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 ${
                    isMobile
                      ? 'px-6 py-4 text-base'
                      : 'px-10 py-5 text-lg'
                  }`}
                  whileHover={{
                    scale: 1.02,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.05, duration: 0.5 }}
                >
                  <span className="relative z-10">View on GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
              )}

              <motion.button
                onClick={() => navigate('/')}
                className={`group w-full inline-flex items-center justify-center gap-3 md:gap-4 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 ${
                  isMobile
                    ? 'px-6 py-4 text-base'
                    : 'px-10 py-5 text-lg'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1, duration: 0.5 }}
              >
                <motion.span
                  className={`text-neutral-300 group-hover:text-white text-lg md:text-xl font-bold transition-colors duration-200 ${
                    isMobile ? 'order-first' : ''
                  }`}
                  whileHover={{ x: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  🏠
                </motion.span>
                <span>Back to Home</span>
              </motion.button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
