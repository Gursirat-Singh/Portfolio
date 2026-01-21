import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Project = ({
  id,
  title,
  description,
  image,
  tags,
  setPreview,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-navy to-indigo rounded-2xl overflow-hidden border border-white/10 hover:border-aqua/30 transition-all duration-300"
      onMouseEnter={() => {
        setPreview(image);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setPreview(null);
        setIsHovered(false);
      }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-aqua/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            onClick={() => navigate(`/project/${id}`)}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white font-medium hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
            <motion.img
              src="assets/arrow-right.svg"
              className="w-4 h-4"
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{title}</h3>
        <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <motion.span
              key={tag.id}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-sand hover:bg-aqua/10 hover:border-aqua/30 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              {tag.name}
            </motion.span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-500">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Tech Stack Icons */}
        <div className="flex gap-2">
          {tags.slice(0, 4).map((tag) => (
            <motion.div
              key={`icon-${tag.id}`}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-aqua/10 hover:border-aqua/30 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={tag.path}
                alt={tag.name}
                className="w-5 h-5"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
