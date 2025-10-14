import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const buildingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const windowVariants = {
    off: { opacity: 0.2, scale: 0.8 },
    on: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-8 h-8 bg-[#2182BF] rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-16 w-6 h-6 bg-[#BF364F] rounded-full opacity-20"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#2182BF] rounded-full opacity-15"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="text-center relative z-10">
        {/* Animated Skyline */}
        <motion.div 
          className="flex justify-center items-end space-x-1 mb-8 h-20"
          variants={pulseVariants}
          animate="pulse"
        >
          {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((height, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-t ${
                index % 2 === 0 
                  ? 'from-[#2182BF] to-blue-300' 
                  : 'from-gray-600 to-gray-400'
              } rounded-t-lg relative overflow-hidden`}
              style={{ width: '20px', height: `${height * 15}px` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              {/* Building Windows */}
              <div className="flex flex-wrap justify-center gap-1 p-1">
                {[...Array(3)].map((_, winIndex) => (
                  <motion.div
                    key={winIndex}
                    className="w-2 h-2 bg-yellow-300 rounded-sm cursor-pointer"
                    variants={windowVariants}
                    initial="off"
                    animate="on"
                    transition={{ delay: winIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.5, transition: { duration: 0.1 } }}
                  />
                ))}
              </div>
              
              {/* Building Shine Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-white opacity-30"
                animate={{ y: [0, 30, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Main Logo/Spinner */}
        <motion.div
          className="relative mx-auto mb-6 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="w-24 h-24 border-4 border-[#2182BF] border-t-transparent rounded-full absolute"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            whileHover={{ borderWidth: 6, transition: { duration: 0.2 } }}
          />
          
          {/* Middle Ring */}
          <motion.div
            className="w-16 h-16 border-4 border-[#BF364F] border-b-transparent rounded-full absolute top-4 left-4"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            whileHover={{ borderWidth: 6, transition: { duration: 0.2 } }}
          />
          
          {/* Inner Core */}
          <motion.div
            className="w-8 h-8 bg-gradient-to-br from-[#2182BF] to-[#BF364F] rounded-full absolute top-8 left-8"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: [1.3, 1.5, 1.3], transition: { duration: 1 } }}
          />

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#2182BF] rounded-full cursor-pointer"
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.5, backgroundColor: "#1a6fa3" }}
          />
          <motion.div
            className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#BF364F] rounded-full cursor-pointer"
            animate={{
              y: [0, 8, 0],
              x: [0, -5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            whileHover={{ scale: 1.5, backgroundColor: "#a82d44" }}
          />
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6 bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-[#2182BF] via-[#9c3a5f] to-[#BF364F] rounded-full relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress Bar Shine */}
            <motion.div
              className="absolute top-0 left-0 h-full w-8 bg-white opacity-30 skew-x-12"
              animate={{ x: [-20, 280] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-[#2182BF] to-[#BF364F] bg-clip-text text-transparent mb-4"
        >
          {progress}%
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4"
        >
          <motion.h2 
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            whileHover={{ scale: 1.05, color: "#2182BF" }}
            transition={{ duration: 0.2 }}
          >
            Ardy Real Estate
          </motion.h2>
        </motion.div>
      </div>

      {/* Animated Corner Accents */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-[#2182BF] rounded-tl-lg cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ borderColor: "#1a6fa3", borderWidth: 6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-[#BF364F] rounded-br-lg cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ borderColor: "#a82d44", borderWidth: 6 }}
      />
    </div>
  );
};

export default Loader;