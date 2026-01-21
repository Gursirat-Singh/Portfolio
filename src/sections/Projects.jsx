import { useState, useEffect, useRef } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
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
      id="work"
      onMouseMove={handleMouseMove}
      className={`relative c-space section-spacing transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <motion.h2
        className="text-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        My Selected Projects
      </motion.h2>
      <motion.div
        className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {myProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Project {...project} setPreview={setPreview} />
          </motion.div>
        ))}
      </div>
      {preview && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          style={{ x: springX, y: springY }}
        >
          <motion.img
            className="object-cover h-64 w-80 rounded-xl shadow-2xl border-2 border-white/20"
            src={preview}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
