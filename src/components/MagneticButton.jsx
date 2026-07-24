import React, { useState } from 'react';
import { motion } from 'motion/react';

export const MagneticButton = ({ children, className, onClick, as = 'button', href, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };
  
  const MotionTag = motion[as];

  return (
    <MotionTag
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
};
