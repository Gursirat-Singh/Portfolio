import { motion } from "motion/react";
const CopyEmailButton = () => {
  const email = "gursirat.tech@gmail.com";

  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <motion.button
      onClick={openEmailClient}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <motion.p
        className="flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        Work With Me
      </motion.p>
    </motion.button>
  );
};

export default CopyEmailButton;
