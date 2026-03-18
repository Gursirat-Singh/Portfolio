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

  // Colors for each timeline entry
  const accentColors = [
    { from: "#a78bfa", to: "#7c3aed", label: "aqua", border: "rgba(167,139,250,0.3)" },
    { from: "#f59e0b", to: "#e17055", label: "mint", border: "rgba(245,158,11,0.3)" },
    { from: "#7c3aed", to: "#ec4899", label: "royal", border: "rgba(124,58,237,0.3)" },
  ];

  return (
    <section className="c-space section-spacing relative overflow-hidden" ref={containerRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-48 h-48 bg-aqua rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-mint rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-block">
          <motion.h2
            className="text-heading relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            My Journey
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-aqua via-mint to-royal rounded-full" />
          </motion.h2>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-aqua rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-mint rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-royal rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
        <motion.p
          className="text-neutral-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A reverse-chronological look at my growth as a developer
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Central timeline line */}
        <motion.div
          className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]"
          style={{
            background: 'linear-gradient(180deg, rgba(167,139,250,0.5) 0%, rgba(245,158,11,0.3) 50%, rgba(124,58,237,0.2) 100%)',
          }}
          initial={{ scaleY: 0, originY: 0 }}
          animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {data.map((item, index) => {
          const accent = accentColors[index % accentColors.length];
          const isEven = index % 2 === 0;
          const isPresent = item.date.includes("Present");

          return (
            <motion.div
              key={index}
              className={`relative mb-16 last:mb-0 md:flex ${isEven ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 z-20">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.4, type: "spring", bounce: 0.4 }}
                >
                  {/* Glow ring */}
                  <div
                    className="absolute inset-0 rounded-full blur-md animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}40, ${accent.to}40)`,
                      transform: 'scale(1.5)',
                    }}
                  />
                  {/* Node */}
                  <div
                    className="relative w-10 h-10 rounded-full flex items-center justify-center border-[3px]"
                    style={{
                      background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                      borderColor: '#0a0a0f',
                    }}
                  >
                    {isPresent ? (
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                    ) : (
                      <div className="w-2.5 h-2.5 bg-white/80 rounded-full" />
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  className="relative p-7 rounded-2xl border border-white/[0.06] hover:border-opacity-100 transition-all duration-500 group overflow-hidden"
                  style={{
                    background: 'linear-gradient(160deg, rgba(37,37,69,0.5), rgba(20,20,40,0.7))',
                  }}
                  whileHover={{
                    borderColor: accent.border,
                    y: -4,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Subtle top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
                    }}
                  />

                  {/* Date badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide"
                      style={{
                        background: `linear-gradient(135deg, ${accent.from}15, ${accent.to}15)`,
                        border: `1px solid ${accent.from}30`,
                        color: accent.from,
                      }}
                    >
                      {isPresent && (
                        <span className="relative flex h-2 w-2">
                          <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ backgroundColor: accent.from }}
                          />
                          <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: accent.from }}
                          />
                        </span>
                      )}
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-white mb-1 group-hover:transition-colors group-hover:duration-300"
                    style={{ '--hover-color': accent.from }}
                    onMouseEnter={(e) => e.currentTarget.style.color = accent.from}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                  >
                    {item.title}
                  </h3>

                  {/* Role */}
                  <p className="text-sm font-medium text-neutral-500 mb-5">{item.job}</p>

                  {/* Content bullets */}
                  <div className="space-y-3">
                    {item.contents.map((content, contentIndex) => (
                      <motion.div
                        key={contentIndex}
                        className="flex gap-3 group/bullet"
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
                        transition={{ delay: index * 0.2 + 0.9 + contentIndex * 0.08, duration: 0.4 }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 group-hover/bullet:scale-125 transition-transform duration-200"
                          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                        />
                        <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                          {content}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at ${isEven ? '100%' : '0%'} 0%, ${accent.from}08 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>

                {/* Connection line to node - desktop only */}
                <div
                  className={`hidden md:block absolute top-[2.1rem] h-[2px] w-8 ${isEven ? 'right-[calc(50%-0.5rem)]' : 'left-[calc(50%-0.5rem)]'}`}
                  style={{
                    background: `linear-gradient(${isEven ? '270deg' : '90deg'}, ${accent.from}50, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* End marker */}
        <motion.div
          className="absolute left-8 md:left-1/2 -translate-x-1/2 -bottom-2"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-3 h-3 rounded-full bg-royal/40 border-2 border-royal/30" />
        </motion.div>
      </div>
    </section>
  );
};
