import { useRef, useState, useEffect } from "react";
import CopyEmailButton from "../components/CopyEmailButton";
import { Globe } from "../components/globe";
import { TiltCard } from "../components/TiltCard";
import { AnimatedCounter } from "../components/AnimatedCounter";
const skillCategories = [
  {
    title: "Languages",
    color: "#a78bfa",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "/assets/logos/javascript.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C++", icon: "/assets/logos/cplusplus.svg" },
    ]
  },
  {
    title: "Frontend",
    color: "#f59e0b",
    skills: [
      { name: "React.js", icon: "/assets/logos/react.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "HTML5", icon: "/assets/logos/html5.svg" },
      { name: "CSS3", icon: "/assets/logos/css3.svg" },
      { name: "Tailwind CSS", icon: "/assets/logos/tailwindcss.svg" },
      { name: "Responsive Web Design", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='2' y='3' width='20' height='14' rx='2' ry='2'></rect><line x1='8' y1='21' x2='16' y2='21'></line><line x1='12' y1='17' x2='12' y2='21'></line></svg>" },
    ]
  },
  {
    title: "Backend",
    color: "#7c3aed",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "RESTful APIs", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='16 18 22 12 16 6'></polyline><polyline points='8 6 2 12 8 18'></polyline></svg>" },
      { name: "JWT Authentication", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect><path d='M7 11V7a5 5 0 0 1 10 0v4'></path></svg>" },
    ]
  },
  {
    title: "Databases",
    color: "#10b981",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ]
  },
  {
    title: "Cloud & DevOps",
    color: "#3b82f6",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Vercel", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'><path d='M12 1L24 22H0L12 1Z'/></svg>" },
      { name: "Git", icon: "/assets/logos/git.svg" },
      { name: "GitHub", icon: "/assets/logos/github.svg" },
    ]
  },
  {
    title: "AI & LLM",
    color: "#ec4899",
    skills: [
      { name: "LangChain.js", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path></svg>" },
      { name: "LangGraph.js", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='18' cy='5' r='3'></circle><circle cx='6' cy='12' r='3'></circle><circle cx='18' cy='19' r='3'></circle><line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line><line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line></svg>" },
      { name: "Gemini API", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'><path d='M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z'/></svg>" },
      { name: "Prompt Engineering", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path></svg>" },
      { name: "Structured Output (Zod)", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline></svg>" },
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
          <TiltCard
            className="relative p-8 rounded-2xl overflow-hidden glass-panel transition-all duration-500 group hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
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
          </TiltCard>

          {/* Stats Card */}
          <TiltCard
            className="relative p-8 rounded-2xl overflow-hidden glass-panel transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
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
                    <AnimatedCounter 
                      value={stat.value} 
                      className={`text-3xl font-black ${stat.color} transition-all duration-300 group-hover/stat:scale-110`} 
                    />
                    <p className="text-xs text-neutral-400 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Skills Showcase */}
          <TiltCard
            className="relative p-8 rounded-2xl overflow-hidden glass-panel transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
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
          </TiltCard>

          {/* CTA Card */}
          <TiltCard
            className="relative p-8 rounded-2xl overflow-hidden glass-panel transition-all duration-500 group hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
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
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default About;
