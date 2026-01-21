import { motion, AnimatePresence } from "motion/react";
const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 flex items-center justify-center bottom-5 right-5"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div
          className={`flex items-center gap-3 p-4 rounded-xl shadow-2xl backdrop-blur-md border ${
            type === "danger"
              ? "bg-red-500/90 border-red-400/50 text-white"
              : "bg-green-500/90 border-green-400/50 text-white"
          }`}
        >
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              type === "danger" ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {type === "danger" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm uppercase tracking-wide">
              {type === "danger" ? "Error" : "Success"}
            </p>
            <p className="text-sm opacity-90">{text}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
