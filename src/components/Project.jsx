import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Project = ({
  id,
  title,
  description,
  image,
  tags,
  href,
  github,
  setPreview,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-aqua/25 transition-all duration-500"
      style={{
        background: 'linear-gradient(160deg, rgba(37,37,69,0.5), rgba(20,20,40,0.8))',
      }}
      onMouseEnter={() => {
        setPreview(image);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setPreview(null);
        setIsHovered(false);
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image - Taller */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-aqua/5 via-transparent to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top-right action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-aqua/20 hover:border-aqua/40 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-aqua/20 hover:border-aqua/40 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>

        {/* Bottom of image: project number badge */}
        <div className="absolute bottom-4 left-5">
          <span className="text-[10px] font-bold tracking-wider uppercase text-aqua/60">
            Project {String(id).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-aqua transition-colors duration-300 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {description}
        </p>

        {/* Tech stack row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {tags.slice(0, 5).map((tag, i) => (
              <div
                key={tag.id}
                className="group/icon relative"
              >
                <div
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-aqua/10 hover:border-aqua/30 transition-all duration-200"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-4.5 h-4.5"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#1a1a35] border border-white/10 rounded-md text-[10px] text-neutral-300 whitespace-nowrap opacity-0 group-hover/icon:opacity-100 scale-90 group-hover/icon:scale-100 transition-all duration-200 pointer-events-none z-10">
                  {tag.name}
                </div>
              </div>
            ))}
            {tags.length > 5 && (
              <span className="text-[10px] text-neutral-500 ml-1">+{tags.length - 5}</span>
            )}
          </div>

          {/* View details arrow */}
          <motion.button
            onClick={() => navigate(`/project/${id}`)}
            className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-aqua transition-colors duration-300 group/btn"
          >
            <span>Details</span>
            <motion.svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.button>
        </div>
      </div>

      {/* Subtle shimmer on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(167,139,250,0.03) 45%, rgba(167,139,250,0.06) 50%, rgba(167,139,250,0.03) 55%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: isHovered ? 'shimmer 2s ease infinite' : 'none',
        }}
      />
    </motion.div>
  );
};

export default Project;
