"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
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
    <section className="c-space section-spacing relative" ref={containerRef}>
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-heading mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Journey
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-aqua via-mint to-royal mx-auto rounded-full mb-8"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.p
          className="text-neutral-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          A chronological journey through my learning and development as a software developer
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.15 + 0.8, duration: 0.8 }}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aqua/50 via-mint/50 to-royal/50"></div>

            {/* Timeline Node */}
            <motion.div
              className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-aqua to-mint border-4 border-black/50 flex items-center justify-center z-10"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: index * 0.15 + 1.0, duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Content Card */}
            <motion.div
              className="ml-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-aqua/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Date */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-aqua/10 border border-aqua/20 rounded-full text-aqua font-semibold text-sm mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.15 + 1.2, duration: 0.4 }}
              >
                {item.date}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-bold text-white mb-2 group-hover:text-aqua transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.15 + 1.3, duration: 0.5 }}
              >
                {item.title}
              </motion.h3>

              {/* Role */}
              <motion.h4
                className="text-lg text-mint font-semibold mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: index * 0.15 + 1.4, duration: 0.5 }}
              >
                {item.job}
              </motion.h4>

              {/* Content List */}
              <div className="space-y-4">
                {item.contents.map((content, contentIndex) => (
                  <motion.div
                    key={contentIndex}
                    className="flex gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.15 + 1.5 + contentIndex * 0.1, duration: 0.4 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-aqua to-mint rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-neutral-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                      {content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-aqua/5 via-transparent to-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          </motion.div>
        ))}


      </div>
    </section>
  );
};
