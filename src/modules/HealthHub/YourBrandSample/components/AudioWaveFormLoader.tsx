import { motion } from 'framer-motion';
import React from 'react';

const AudioWaveformLoader: React.FC = () => {
  const loaderVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const barVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.section
      className="w-full h-full flex gap-0.5"
      variants={loaderVariants}
      initial="initial"
      animate="animate"
    >
      {Array.from({ length: 42 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-full bg-gray-200 rounded-full"
          variants={barVariants}
          custom={i}
        />
      ))}
    </motion.section>
  );
};

export default AudioWaveformLoader;
