import React from 'react';
import { motion } from 'motion/react';

const SectionDivider = ({ 
  fromColor = "#a78bfa", // aqua
  toColor = "#f59e0b",   // mint
  id = "grad"
}) => {
  return (
    <div className="relative w-full h-24 overflow-hidden -my-12 flex items-center justify-center pointer-events-none opacity-60 z-10">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center"
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          <motion.path 
            d="M0,60 C300,120 900,0 1200,60" 
            fill="none" 
            stroke={`url(#${id})`} 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ filter: `drop-shadow(0 0 8px ${fromColor}80)` }}
          />
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor={fromColor} />
              <stop offset="75%" stopColor={toColor} />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default SectionDivider;
