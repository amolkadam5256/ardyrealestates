import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const NotFoundPage = () => {
  const numberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className=" bg-white flex items-center justify-center p-8 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto relative z-10"
      >
        {/* Animated 404 Numbers */}
        <div className="flex justify-center items-center space-x-8 mb-8">
          <motion.div
            variants={numberVariants}
            className="relative"
          >
            <div className="text-9xl font-bold bg-gradient-to-r from-[#2182BF] to-[#BF364F] bg-clip-text text-transparent">
              4
            </div>
          </motion.div>

          <motion.div
            variants={numberVariants}
            className="relative"
            transition={{ delay: 0.1 }}
          >
            <div className="text-9xl font-bold bg-gradient-to-r from-[#BF364F] to-[#2182BF] bg-clip-text text-transparent">
              0
            </div>
          </motion.div>

          <motion.div
            variants={numberVariants}
            className="relative"
            transition={{ delay: 0.2 }}
          >
            <div className="text-9xl font-bold bg-gradient-to-r from-[#2182BF] to-[#BF364F] bg-clip-text text-transparent">
              4
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-lg text-gray-500">
            Let's get you back to exploring our properties.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <FaHome className="mr-3" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="flex items-center justify-center px-8 py-4 bg-white text-gray-800 border-2 border-[#2182BF] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold hover:bg-[#2182BF] hover:text-white"
            >
              <FaMapMarkerAlt className="mr-3" />
              Browse Properties
            </Link>
          </motion.div>
        </motion.div>

        {/* Simple Decorative Elements */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-2"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-[#2182BF] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;