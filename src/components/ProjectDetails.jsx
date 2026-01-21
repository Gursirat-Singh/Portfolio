import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Enhanced Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
      />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-aqua/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-royal/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-navy/95 via-indigo/95 to-storm/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 40 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Enhanced Close Button */}
        <motion.button
          onClick={closeModal}
          className="absolute top-6 right-6 z-20 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 hover:border-white/20 transition-all duration-300 shadow-lg"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="assets/close.svg"
            className="w-5 h-5"
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>

        {/* Hero Section */}
        <div className="relative">
          <motion.div
            className="relative h-72 md:h-96 overflow-hidden rounded-t-3xl"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-t-3xl ring-1 ring-white/10" />
          </motion.div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {title}
              </motion.h1>
              <motion.p
                className="text-aqua text-xl md:text-2xl font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {description}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          {/* Project Overview */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <div className="w-1 h-8 bg-aqua rounded-full" />
              Project Overview
            </motion.h3>
            <div className="space-y-4">
              {subDescription.map((subDesc, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-aqua rounded-full mt-2 flex-shrink-0" />
                  <p className="text-neutral-200 leading-relaxed text-lg">{subDesc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <div className="w-1 h-8 bg-mint rounded-full" />
              Technology Stack
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.id}
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl hover:border-aqua/30 hover:shadow-lg hover:shadow-aqua/10 transition-all duration-300 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.05, duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 10px 30px rgba(51, 194, 204, 0.2)"
                  }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center group-hover:bg-aqua/20 transition-colors duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-7 h-7"
                    />
                  </motion.div>
                  <div>
                    <span className="text-white font-semibold text-sm block">{tag.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Section */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-end items-center pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-aqua via-aqua to-mint text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl hover:shadow-aqua/30 transition-all duration-300 text-center"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(51, 194, 204, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
              >
                <span className="text-lg">View Live Project</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <img
                    src="assets/arrow-up.svg"
                    className="w-6 h-6 rotate-45"
                  />
                </motion.div>
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-center"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.3 }}
              >
                <span className="text-lg">View on GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            )}

            <motion.button
              onClick={closeModal}
              className="w-full sm:w-auto px-6 py-3 text-neutral-300 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
