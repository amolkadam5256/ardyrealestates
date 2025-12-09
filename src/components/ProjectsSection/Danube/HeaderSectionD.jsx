import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeaderSectionD = () => {
  // Working high-quality real estate/Dubai images
  const imageLinks = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Luxury Dubai building
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Modern apartment interior
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Luxury villa exterior
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"  // Modern luxury apartment
  ];

  return (
    <div className="relative w-full">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full -z-10 ">
        <Carousel
          autoPlay
          infiniteLoop
          interval={3500}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          swipeable
          emulateTouch
        >
          {imageLinks.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Danube Property Background ${index + 1}`}
                className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-7xl mx-auto px-4 py-20"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2 mb-6">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse"></div>
          <span className="text-sm font-semibold tracking-wider text-white uppercase drop-shadow-md">
            Exclusive Danube Portfolio
          </span>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Premium</span> Danube Properties
        </h2>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          Explore our curated collection of Danube's finest developments in Dubai's most sought-after locations
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto px-4"
      >
        {[
          { label: "Projects", value: "10+" },
          { label: "Starting Price", value: "AED 599K" },
          { label: "Payment Plans", value: "Flexible" },
          { label: "ROI", value: "Up to 8%" },
        ].map((stat, index) => (
          <div key={index} className="bg-white p-5 shadow-sm border border-gray-200 text-center">
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderSectionD;