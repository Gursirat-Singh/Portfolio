import { useRef, useState, useEffect } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import { Globe } from "../components/globe";

const skillCategories = [
  {
    title: "Languages",
    color: "#a78bfa",
    skills: [
      { name: "JavaScript", icon: "assets/logos/javascript.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "assets/logos/cplusplus.svg" },
    ]
  },
  {
    title: "Frontend",
    color: "#f59e0b",
    skills: [
      { name: "React", icon: "assets/logos/react.svg" },
      { name: "Tailwind", icon: "assets/logos/tailwindcss.svg" },
      { name: "Three.js", icon: "assets/logos/threejs.svg" },
      { name: "Vite", icon: "assets/logos/vitejs.svg" },
    ]
  },
  {
    title: "Backend",
    color: "#7c3aed",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ]
  },
  {
    title: "Tools",
    color: "#ec4899",
    skills: [
      { name: "Git", icon: "assets/logos/git.svg" },
      { name: "GitHub", icon: "assets/logos/github.svg" },
    ]
  }
];

const stats = [
  { value: "2+", label: "Years Experience", color: "text-aqua" },
  { value: "7+", label: "Projects Built", color: "text-mint" },
  { value: "10+", label: "Technologies", color: "text-royal" },
  { value: "24/7", label: "Available", color: "text-fuchsia" },
];

const About = () => {
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

      {/* Section header */}
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

      {/* Main content grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ── Left Column ── */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* Introduction Card */}
          <div
            className="relative p-8 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-aqua/20 transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(37,37,69,0.6), rgba(26,26,53,0.8))',
            }}
          >
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-aqua/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-mint/20 rounded-br-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(124,58,237,0.25))',
                  border: '1px solid rgba(167,139,250,0.3)',
                }}>
                  <span className="text-lg">👋</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Hi, I'm Gursirat</h3>
                  <p className="text-xs text-neutral-500 tracking-wider uppercase">Full-Stack Developer</p>
                </div>
              </div>

              <p className="text-neutral-300 leading-relaxed text-[15px]">
                Passionate developer with <span className="text-aqua font-semibold">2+ years</span> of experience
                crafting innovative software and web applications. I bridge the gap between
                <span className="text-mint font-semibold"> design & functionality</span>, delivering
                scalable solutions that drive results.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Problem Solver", "Team Player", "Quick Learner", "Detail-Oriented"].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.08] text-neutral-300 hover:border-aqua/30 hover:text-aqua transition-all duration-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div
            className="relative p-8 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-aqua/20 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(42,42,58,0.5), rgba(26,26,46,0.7))',
            }}
          >
            {/* Background globe */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
              <div className="w-[280px] h-[280px]">
                <Globe />
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-1 bg-gradient-to-r from-royal to-fuchsia rounded-full" />
                <h3 className="text-lg font-bold text-white">By the Numbers</h3>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-aqua/20 hover:bg-white/[0.05] transition-all duration-300 group/stat"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <p className={`text-3xl font-black ${stat.color} transition-all duration-300 group-hover/stat:scale-110`}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Skills Showcase */}
          <div
            className="relative p-8 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-aqua/20 transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(37,37,69,0.6), rgba(26,26,53,0.8))',
            }}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-1 bg-gradient-to-r from-aqua to-mint rounded-full" />
                  <h3 className="text-lg font-bold text-white">Skills & Technologies</h3>
                </div>
                <span className="text-xs text-neutral-500 font-medium bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">
                  {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)} tools
                </span>
              </div>

              <div className="space-y-6">
                {skillCategories.map((category, catIndex) => (
                  <div
                    key={category.title}
                    className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700`}
                    style={{ transitionDelay: `${catIndex * 150 + 300}ms` }}
                  >
                    {/* Category header */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm font-semibold" style={{ color: category.color }}>
                        {category.title}
                      </span>
                      <div className="flex-1 h-px bg-white/[0.06] ml-2" />
                    </div>

                    {/* Skill pills */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className={`group/skill flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-opacity-40 hover:bg-white/[0.06] transition-all duration-300 cursor-default ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                          }`}
                          style={{
                            transitionDelay: `${catIndex * 150 + skillIndex * 80 + 400}ms`,
                            '--hover-border': category.color,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = category.color + '50';
                            e.currentTarget.style.boxShadow = `0 0 20px ${category.color}10`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-5 h-5 group-hover/skill:scale-110 transition-transform duration-300"
                          />
                          <span className="text-sm font-medium text-neutral-300 group-hover/skill:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>

          {/* CTA Card */}
          <div
            className="relative p-8 rounded-2xl overflow-hidden border border-white/[0.06] hover:border-aqua/20 transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(192,132,252,0.1), rgba(236,72,153,0.08))',
            }}
          >
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-aqua/10 via-mint/5 to-royal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating decorative shapes */}
            <div className="absolute top-5 right-5 w-3 h-3 border-2 border-white/20 rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
            <div className="absolute bottom-5 left-5 w-2 h-2 rounded-full bg-white/10 group-hover:bg-aqua/30 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's Work Together</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                  Ready to bring your ideas to life? I'm always open to discussing new projects and opportunities.
                </p>
              </div>
              <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                <CopyEmailButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
