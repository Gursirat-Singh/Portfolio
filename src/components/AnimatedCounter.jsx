import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'motion/react';

export const AnimatedCounter = ({ value, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Extract number and suffix from string like "2+" or "24/7"
  const numMatch = value.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');
  const prefixMatch = value.match(/^[^\d]+/);
  const prefix = prefixMatch ? prefixMatch[0] : '';
  const cleanSuffix = suffix.replace(/^[^\d]+/, '');

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    mass: 1
  });

  const displayValue = useTransform(springValue, (current) => {
    // Keep it an integer
    return Math.floor(current);
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(num);
    }
  }, [isInView, num, motionValue]);

  // For special cases like 24/7 where animation might be weird, fallback to standard or animate first number
  if (value === "24/7") {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {cleanSuffix}
    </span>
  );
};
