import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaWhatsapp,
  FaTimes,
  FaShareAlt
} from 'react-icons/fa';

const DraggableSocialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 60 }); 
  const [isDragging, setIsDragging] = useState(false);
  const dragConstraintsRef = useRef(null);

  const socialPlatforms = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FaFacebookF />,
      color: '#1877F2',
      url: 'https://facebook.com/ardyrealestate'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram />,
      color: '#E4405F',
      url: 'https://instagram.com/ardyrealestate'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      color: '#0A66C2',
      url: 'https://linkedin.com/company/ardyrealestate'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <FaYoutube />,
      color: '#FF0000',
      url: 'https://youtube.com/ardyrealestate'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      color: '#25D366',
      url: 'https://wa.me/971505761914'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <FaTwitter />,
      color: '#1DA1F2',
      url: 'https://twitter.com/ardyrealestate'
    }
  ];

  const handleDrag = (event, info) => {
    setPosition({
      x: position.x + info.delta.x,
      y: position.y + info.delta.y
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    closed: {
      width: 60,
      height: 60,
      borderRadius: 30,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    open: {
      width: 200,
      height: 200,
      borderRadius: 20,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.3,
      rotate: 10,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <>
      {/* Drag Boundary */}
      <div ref={dragConstraintsRef} className="fixed inset-0 pointer-events-none" />

      {/* Draggable Social Menu */}
      <motion.div
        className="fixed z-50 cursor-move bottom-20 left-0"
        style={{ x: position.x, y: position.y }}
        drag
        dragConstraints={dragConstraintsRef}
        dragElastic={0.1}
        onDrag={handleDrag}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {/* Main Floating Button */}
        <motion.div
          className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white shadow-2xl backdrop-blur-sm border border-white/20 overflow-hidden"
          variants={containerVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Content Area */}
          <div className="h-full w-full flex items-center justify-center relative">
            {!isOpen ? (
              // Closed state - Just the share icon
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer"
                onClick={toggleMenu}
              >
                <FaShareAlt size={24} />
              </motion.div>
            ) : (
              // Open state - All social media icons in grid
              <div className="w-full h-full p-4">
                <div className="grid grid-cols-3 gap-3 w-full h-full">
                  {socialPlatforms.map((platform, index) => (
                    <motion.button
                      key={platform.id}
                      variants={iconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSocialClick(platform.url)}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 relative group"
                      style={{ backgroundColor: platform.color }}
                    >
                      {platform.icon}
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        <div className="bg-gray-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                          {platform.name}
                        </div>
                        <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center"
                >
                  <FaTimes size={12} />
                </motion.button>
              </div>
            )}
          </div>

          {/* Drag Handle Visual Feedback */}
          <motion.div
            animate={{ 
              opacity: isDragging ? 1 : 0.5,
              scale: isDragging ? 1.2 : 1
            }}
            className="absolute bottom-2 right-2 text-white/60"
          >
            <div className="w-2 h-2 bg-current rounded-full" />
          </motion.div>
        </motion.div>

        {/* Pulse Animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2182BF] to-[#BF364F]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ zIndex: -1 }}
          />
        )}
      </motion.div>
    </>
  );
};

export default DraggableSocialMenu;