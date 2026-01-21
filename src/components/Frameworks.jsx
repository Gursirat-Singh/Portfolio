import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    // Languages
    { name: "cplusplus", src: "assets/logos/cplusplus.svg", category: "language" },
    { name: "java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "language" },
    { name: "javascript", src: "assets/logos/javascript.svg", category: "language" },
    { name: "html5", src: "assets/logos/html5.svg", category: "language" },
    { name: "css3", src: "assets/logos/css3.svg", category: "language" },
    // Frontend
    { name: "react", src: "assets/logos/react.svg", category: "frontend" },
    { name: "tailwindcss", src: "assets/logos/tailwindcss.svg", category: "frontend" },
    { name: "framermotion", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg", category: "frontend" },
    { name: "threejs", src: "assets/logos/threejs.svg", category: "frontend" },
    { name: "reactthreefiber", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
    // Backend
    { name: "nodejs", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
    { name: "mongodb", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "backend" },
    // Full-Stack / Web
    { name: "mernstack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "fullstack" },
    { name: "restapis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "fullstack" },
    // Tools
    { name: "git", src: "assets/logos/git.svg", category: "tools" },
    { name: "github", src: "assets/logos/github.svg", category: "tools" },
    { name: "postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "tools" },
    { name: "vitejs", src: "assets/logos/vitejs.svg", category: "tools" },
    // Cloud (Basics)
    { name: "aws", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", category: "cloud" },
  ];

  return (
    <div className="relative flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden">
      {/* Enhanced central glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 bg-gradient-radial from-aqua/30 via-transparent to-transparent rounded-full blur-2xl animate-pulse" />
        <div className="absolute w-24 h-24 bg-gradient-radial from-mint/20 via-transparent to-transparent rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }} />
      </div>

      {/* Background particle effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-aqua rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Outer orbit - large icons, fast rotation */}
      <OrbitingCircles
        iconSize={48}
        radius={190}
        duration={12}
        speed={2.5}
        className="opacity-95"
      >
        {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
          <Icon key={`outer-${index}`} src={skill.src} category={skill.category} />
        ))}
      </OrbitingCircles>

      {/* Middle orbit - medium icons, very fast reverse */}
      <OrbitingCircles
        iconSize={38}
        radius={135}
        duration={8}
        speed={3.8}
        reverse
        className="opacity-100"
      >
        {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
          <Icon key={`middle-${index}`} src={skill.src} category={skill.category} />
        ))}
      </OrbitingCircles>

      {/* Inner orbit - small icons, ultra fast */}
      <OrbitingCircles
        iconSize={30}
        radius={85}
        duration={6}
        speed={5.2}
        path={false}
        className="opacity-90"
      >
        {skills.slice(0, 8).map((skill, index) => (
          <Icon key={`inner-${index}`} src={skill.src} category={skill.category} />
        ))}
      </OrbitingCircles>

      {/* Enhanced center element */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-aqua/40 via-mint/30 to-royal/40 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl">
            <div className="w-10 h-10 bg-gradient-to-br from-aqua via-mint to-royal rounded-full animate-spin" style={{ animationDuration: '4s' }} />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-aqua/20 to-mint/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        </div>
      </div>

      {/* Orbital trails effect */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <circle
            cx="200" cy="200" r="190"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="1"
            opacity="0.1"
            className="animate-pulse"
          />
          <circle
            cx="200" cy="200" r="135"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="1"
            opacity="0.15"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#33c2cc" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#57db96" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#33c2cc" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5c33cc" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#ca2f8c" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5c33cc" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const Icon = ({ src, category }) => {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'language': return 'hover:shadow-blue-500/50';
      case 'frontend': return 'hover:shadow-cyan-500/50';
      case 'backend': return 'hover:shadow-green-500/50';
      case 'fullstack': return 'hover:shadow-purple-500/50';
      case 'tools': return 'hover:shadow-orange-500/50';
      case 'cloud': return 'hover:shadow-yellow-500/50';
      default: return 'hover:shadow-white/50';
    }
  };

  // Extract technology name from src URL or path
  const getAltText = (src) => {
    if (src.includes('cplusplus')) return 'C++';
    if (src.includes('java')) return 'Java';
    if (src.includes('javascript')) return 'JavaScript';
    if (src.includes('html5')) return 'HTML5';
    if (src.includes('css3')) return 'CSS3';
    if (src.includes('react')) return 'React';
    if (src.includes('tailwindcss')) return 'Tailwind CSS';
    if (src.includes('framermotion')) return 'Framer Motion';
    if (src.includes('threejs')) return 'Three.js';
    if (src.includes('nodejs')) return 'Node.js';
    if (src.includes('express')) return 'Express.js';
    if (src.includes('mongodb')) return 'MongoDB';
    if (src.includes('postman')) return 'Postman';
    if (src.includes('git')) return 'Git';
    if (src.includes('github')) return 'GitHub';
    if (src.includes('vitejs')) return 'Vite.js';
    if (src.includes('amazonwebservices')) return 'AWS';
    return 'Technology Logo';
  };

  return (
    <div className="relative group">
      <img
        src={src}
        alt={getAltText(src)}
        className={`duration-300 rounded-lg hover:scale-125 transition-all ease-out ${getCategoryColor(category)} hover:shadow-lg hover:shadow-2xl backdrop-blur-sm`}
        style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.1))' }}
      />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
