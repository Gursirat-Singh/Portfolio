import { useRef, useState, useEffect } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`c-space section-spacing transition-all duration-1000 relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="about"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-aqua rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-mint rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-royal rounded-full blur-3xl" />
      </div>

      {/* Section header with enhanced styling */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-block">
          <h2 className="text-heading relative">
            About Me
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-aqua via-mint to-royal rounded-full" />
          </h2>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-aqua rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-mint rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-royal rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
        <p className="text-neutral-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
          Get to know the developer behind the code
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[20rem] relative z-10">
        {/* Grid 1 - Introduction */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-2xl" />

          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] group-hover:scale-[1.8] md:group-hover:scale-[3.2] lg:group-hover:scale-[2.7] transition-transform duration-700"
          />

          {/* Floating accent elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-aqua rounded-full animate-ping opacity-60" />
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-mint rounded-full animate-pulse opacity-60" />

          <div className="z-10 relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-1 bg-gradient-to-r from-aqua to-mint rounded-full" />
              <p className="headtext">Hi, I'm Gursirat</p>
            </div>
            <p className="subtext leading-relaxed">
              Passionate full-stack developer with <span className="text-aqua font-semibold">2+ years</span> of experience crafting
              innovative software and web applications. I bridge the gap between
              <span className="text-mint font-semibold"> design & functionality</span>, delivering scalable solutions that drive results.
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo via-indigo/50 to-transparent" />
        </div>
        {/* Grid 2 - Shooting Stars Technologies */}
        <div className="grid-default-color grid-2 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Deep space background */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-purple-900/20 to-black">
            {/* Static stars */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-px bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2
                }}
              />
            ))}

            {/* Nebula effects */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-radial from-aqua/10 via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-radial from-mint/8 via-transparent to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-royal/6 via-transparent to-transparent rounded-full blur-3xl" style={{ transform: 'translate(-50%, -50%)' }} />
          </div>

          {/* Shooting Stars Animation */}
          <div className="absolute inset-0">
            {/* Shooting Star 1 - JavaScript */}
            <div className="shooting-star-1 absolute animate-shooting-star-1">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-aqua/30 shadow-lg">
                <img src="assets/logos/javascript.svg" className="w-5 h-5" alt="JavaScript" />
                <span className="text-sm text-white font-medium">JavaScript</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-aqua/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 2 - React */}
            <div className="shooting-star-2 absolute animate-shooting-star-2" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-mint/30 shadow-lg">
                <img src="assets/logos/react.svg" className="w-5 h-5" alt="React" />
                <span className="text-sm text-white font-medium">React</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mint/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 3 - Python */}
            <div className="shooting-star-3 absolute animate-shooting-star-3" style={{ animationDelay: '4s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-blue-400/30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-5 h-5" alt="Python" />
                <span className="text-sm text-white font-medium">Python</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 4 - Node.js */}
            <div className="shooting-star-4 absolute animate-shooting-star-4" style={{ animationDelay: '6s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-green-400/30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-5 h-5" alt="Node.js" />
                <span className="text-sm text-white font-medium">Node.js</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 5 - Tailwind */}
            <div className="shooting-star-5 absolute animate-shooting-star-5" style={{ animationDelay: '8s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-cyan-400/30 shadow-lg">
                <img src="assets/logos/tailwindcss.svg" className="w-5 h-5" alt="Tailwind" />
                <span className="text-sm text-white font-medium">Tailwind</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 6 - MongoDB */}
            <div className="shooting-star-6 absolute animate-shooting-star-6" style={{ animationDelay: '10s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-green-500/30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-5 h-5" alt="MongoDB" />
                <span className="text-sm text-white font-medium">MongoDB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 7 - Three.js */}
            <div className="shooting-star-7 absolute animate-shooting-star-7" style={{ animationDelay: '12s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-orange-400/30 shadow-lg">
                <img src="assets/logos/threejs.svg" className="w-5 h-5" alt="Three.js" />
                <span className="text-sm text-white font-medium">Three.js</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 8 - Java */}
            <div className="shooting-star-8 absolute animate-shooting-star-8" style={{ animationDelay: '14s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-red-400/30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-5 h-5" alt="Java" />
                <span className="text-sm text-white font-medium">Java</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 9 - Express */}
            <div className="shooting-star-9 absolute animate-shooting-star-9" style={{ animationDelay: '16s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-400/30 shadow-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-5 h-5" alt="Express" />
                <span className="text-sm text-white font-medium">Express</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 10 - C++ */}
            <div className="shooting-star-10 absolute animate-shooting-star-10" style={{ animationDelay: '18s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-blue-600/30 shadow-lg">
                <img src="assets/logos/cplusplus.svg" className="w-5 h-5" alt="C++" />
                <span className="text-sm text-white font-medium">C++</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 11 - Git */}
            <div className="shooting-star-11 absolute animate-shooting-star-11" style={{ animationDelay: '20s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-orange-500/30 shadow-lg">
                <img src="assets/logos/git.svg" className="w-5 h-5" alt="Git" />
                <span className="text-sm text-white font-medium">Git</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 12 - GitHub */}
            <div className="shooting-star-12 absolute animate-shooting-star-12" style={{ animationDelay: '22s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-gray-600/30 shadow-lg">
                <img src="assets/logos/github.svg" className="w-5 h-5" alt="GitHub" />
                <span className="text-sm text-white font-medium">GitHub</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>

            {/* Shooting Star 13 - Vite */}
            <div className="shooting-star-13 absolute animate-shooting-star-13" style={{ animationDelay: '24s' }}>
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-2 border border-yellow-400/30 shadow-lg">
                <img src="assets/logos/vitejs.svg" className="w-5 h-5" alt="Vite" />
                <span className="text-sm text-white font-medium">Vite</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full blur-sm animate-pulse" />
            </div>
          </div>

          {/* Header */}
          <div className="relative z-20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-aqua to-mint rounded-full" />
              <p className="headtext">Technologies</p>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Watch my skills streak across the cosmos like shooting stars, each carrying the power of modern technology
            </p>
          </div>

          {/* Technology Categories Legend */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-aqua rounded-full animate-pulse" />
                <span className="text-aqua font-medium">Languages</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-mint rounded-full animate-pulse" />
                <span className="text-mint font-medium">Frontend</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-medium">Backend</span>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-orange-400 font-medium">Tools</span>
              </div>
            </div>
          </div>
        </div>
        {/* Grid 3 - Experience Stats */}
        <div className="grid-black-color grid-3 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm rounded-2xl" />

          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-aqua/20 via-transparent to-mint/20" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-aqua/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          <div className="z-10 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-royal to-fuchsia rounded-full" />
              <p className="headtext">Experience</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:text-aqua transition-colors">2+</p>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-aqua rounded-full animate-ping opacity-60" />
                </div>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:text-mint transition-colors">7+</p>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-mint rounded-full animate-ping opacity-60" />
                </div>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:text-royal transition-colors">10+</p>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-royal rounded-full animate-ping opacity-60" />
                </div>
                <p className="text-sm text-gray-300">Technologies</p>
              </div>
              <div className="text-center group/stat hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <p className="text-3xl font-bold text-white mb-1 group-hover/stat:text-fuchsia transition-colors">24/7</p>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-fuchsia rounded-full animate-ping opacity-60" />
                </div>
                <p className="text-sm text-gray-300">Available</p>
              </div>
            </div>
          </div>

          <figure className="absolute left-[25%] top-[8%] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 - Call to Action */}
        <div className="grid-special-color grid-4 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal/20 via-fuchsia/10 to-lavender/20 backdrop-blur-sm rounded-2xl" />

          {/* Floating geometric shapes */}
          <div className="absolute top-6 right-6 w-4 h-4 border-2 border-white/30 rotate-45 animate-bounce opacity-60" />
          <div className="absolute bottom-6 left-6 w-3 h-3 bg-white/20 rounded-full animate-pulse opacity-60" />

          <div className="flex flex-col items-center justify-center gap-6 size-full relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-1 bg-gradient-to-r from-fuchsia to-sand rounded-full" />
                <p className="headtext text-center">Let's Work Together</p>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
            </div>
            <div className="transform group-hover:scale-110 transition-transform duration-300">
              <CopyEmailButton />
            </div>
          </div>

          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
        </div>

        {/* Grid 5 - Tech Stack Showcase */}
        <div className="grid-default-color grid-5 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-indigo/10 backdrop-blur-sm rounded-2xl" />

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-aqua/40 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-mint/40 rounded-br-lg" />

          <div className="z-10 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-mint to-royal rounded-full" />
              <p className="headtext">Tech Stack</p>
            </div>
            <p className="subtext leading-relaxed">
              I specialize in a variety of <span className="text-aqua font-semibold">languages</span>, <span className="text-mint font-semibold">frameworks</span>, and <span className="text-royal font-semibold">tools</span> that
              allow me to build robust and scalable applications across the full stack
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125 group-hover:scale-[1.3] md:group-hover:scale-[1.35] transition-transform duration-700">
            <Frameworks />
          </div>

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
