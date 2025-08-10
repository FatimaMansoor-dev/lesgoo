import { motion } from 'framer-motion';
import React from 'react';

import { cn } from 'src/lib/utils';

import { SmileIcon } from 'lucide-react';
import Container from 'modules/YourBrandSample/components/Container';


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

      <div className="mb-4 flex justify-center w-full gap-2 items-start">
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="font-semibold text-2xl mb-0.5">Enjoying RenewMe?</h1>
          <p className="text-sm text-zinc-400 font-medium">We would love to hear from you!</p>
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
            'fixed top-0 -left-10 h-full w-[40%] bg-gradient-to-r from-[#F07E58]/40 opacity-0 to-transparent pointer-events-none transition-opacity duration-300 ease-in-ou group-hover:opacity-40'
          )}
        />

        <div
          className={cn(
            'fixed top-0 -right-10 h-full w-[40%] bg-gradient-to-l from-[#F07E58]/40 opacity-0 to-transparent pointer-events-none transition-opacity duration-300 ease-in-ou group-hover:opacity-40'
          )}
        />

        <motion.div
          className="relative h-[227px] flex items-center justify-center cursor-pointer"
          variants={containerVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {circles.map((circle, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-full absolute flex items-center justify-center"
              style={{
                backgroundColor: `${circle.color}${Math.floor(circle.opacity * 255).toString(16)}`,
                height: `${circle.scale * 100}%`,
                zIndex: circle.zIndex,
              }}
              variants={circleVariants}
            >
              {index === 3 && (
                <motion.div
                  className="flex flex-col items-center justify-center text-white font-medium text-center text-xs"
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
