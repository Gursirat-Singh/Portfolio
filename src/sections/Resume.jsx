import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Resume = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="c-space section-spacing relative" id="resume" ref={containerRef}>
      {/* Resume Download Card */}
      <motion.div
        className="mt-16 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:border-aqua/30 transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="w-16 h-16 mx-auto bg-gradient-to-br from-aqua to-mint rounded-full flex items-center justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <motion.svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
            </motion.div>
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2.6, duration: 0.6 }}
          >
            Ready to Work Together?
          </motion.h3>

          {/* Professional Summary */}
          <motion.div
            className="mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2.8, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-black/10 to-black/5 backdrop-blur-sm border border-white/5 rounded-xl p-6">
              <motion.h4
                className="text-aqua font-semibold mb-4 text-center"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 3.0, duration: 0.4 }}
              >
                Professional Summary
              </motion.h4>

              <div className="space-y-3">
                {[
                  "Full-Stack Developer with expertise in MERN stack, React, Node.js, and modern web technologies.",
                  "Proven track record in building scalable web applications and innovative projects.",
                  "Strong foundation in Data Structures & Algorithms with Java and C++ proficiency.",
                  "Passionate about creating user-centric solutions and continuous learning in software development."
                ].map((summary, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 3.1 + idx * 0.1, duration: 0.4 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-aqua to-mint rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-neutral-300 leading-relaxed text-sm">
                      {summary}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Resume PDF Preview */}
          <motion.div
            className="mb-8 max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2.8, duration: 0.6 }}
          >
            <motion.h4
              className="text-aqua font-semibold mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 3.0, duration: 0.4 }}
            >
              Resume Preview
            </motion.h4>

            {/* PDF Embed Container */}
            <motion.div
              className="relative bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 3.1, duration: 0.5 }}
            >
              {/* PDF Iframe */}
              <iframe
                src="/assets/Gursirat_Singh_Intern.pdf#page=1"
                width="100%"
                height="500"
                style={{
                  border: 'none',
                  borderRadius: '12px',
                  backgroundColor: '#1a1a1a'
                }}
                title="Resume Preview"
              ></iframe>

              {/* Download Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-sm flex items-center justify-center rounded-xl cursor-pointer group"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/Gursirat_Singh_Intern.pdf';
                  link.download = 'Gursirat_Singh_Intern.pdf';
                  link.click();
                }}
              >
                <motion.div
                  className="text-center p-8"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto bg-gradient-to-br from-aqua to-mint rounded-full flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Want to See More?
                  </motion.h3>

                  <motion.p
                    className="text-neutral-300 mb-6 max-w-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Download my complete resume for full details, projects, and contact information.
                  </motion.p>

                  <motion.button
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-aqua via-mint to-royal rounded-full text-black font-semibold hover:shadow-lg hover:shadow-aqua/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, opacity: 1, y: 0 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </motion.svg>
                    Download Full Resume
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Hover Hint */}
              <motion.div
                className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-neutral-300 border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 3.5, duration: 0.4 }}
              >
                Hover to download
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-neutral-400 mb-6 max-w-md mx-auto text-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 3.6, duration: 0.6 }}
          >
            Get the complete details in my full resume
          </motion.p>

          <motion.a
            href="/assets/Gursirat_Singh_Intern.pdf"
            download="Gursirat_Singh_Intern.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-aqua via-mint to-royal rounded-full text-black font-bold text-lg hover:shadow-2xl hover:shadow-aqua/30 transition-all duration-300 group/download"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 3.0, duration: 0.5 }}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </motion.svg>
            <span>Download Full Resume</span>
            <motion.div
              className="flex gap-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </motion.div>
          </motion.a>

          {/* Decorative elements */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-aqua/5 via-transparent to-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
