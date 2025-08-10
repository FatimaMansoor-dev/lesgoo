import { motion } from 'framer-motion';
import React from 'react';

import { cn } from 'src/lib/utils';

import { SmileIcon } from 'lucide-react';

import Container from './Container';

const EnjoyingRenewMe: React.FC = () => {
  const circles = [
    { color: '#F07E58', scale: 1, opacity: 0.1, zIndex: 0 },
    { color: '#F07E58', scale: 0.85, opacity: 0.2, zIndex: 10 },
    { color: '#F07E58', scale: 0.65, opacity: 0.4, zIndex: 20 },
    { color: '#F07E58', scale: 0.45, opacity: 1, zIndex: 30 },
  ];

  const containerVariants = {
    hover: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.05,
        delayChildren: 0.02,
      },
    },
    tap: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const circleVariants = {
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 1,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Container className="w-full">
      {/* Orange Gradient to Transparent left and right */}

      <div className="mb-4 flex w-full items-start justify-center gap-2">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-0.5 text-2xl font-semibold">Enjoying RenewMe?</h1>
          <p className="text-sm font-medium text-zinc-400">We would love to hear from you!</p>
        </div>
      </div>
      <a
        href="https://form.typeform.com/to/euOLT3Wv"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div
          className={cn(
            'ease-in-ou pointer-events-none fixed -left-10 top-0 h-full w-[40%] bg-gradient-to-r from-[#F07E58]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40'
          )}
        />

        <div
          className={cn(
            'ease-in-ou pointer-events-none fixed -right-10 top-0 h-full w-[40%] bg-gradient-to-l from-[#F07E58]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40'
          )}
        />

        <motion.div
          className="relative flex h-[227px] cursor-pointer items-center justify-center"
          variants={containerVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {circles.map((circle, index) => (
            <motion.div
              key={index}
              className="absolute flex aspect-square items-center justify-center rounded-full"
              style={{
                backgroundColor: `${circle.color}${Math.floor(circle.opacity * 255).toString(16)}`,
                height: `${circle.scale * 100}%`,
                zIndex: circle.zIndex,
              }}
              variants={circleVariants}
            >
              {index === 3 && (
                <motion.div
                  className="flex flex-col items-center justify-center text-center text-xs font-medium text-white"
                  style={{ opacity: circle.opacity }}
                >
                  <SmileIcon size={20} className="mb-1" />
                  Share your feedback!
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </a>
    </Container>
  );
};

export default EnjoyingRenewMe;
