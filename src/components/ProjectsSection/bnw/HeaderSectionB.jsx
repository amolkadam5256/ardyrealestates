import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// IMPORT LOCAL IMAGES
import Images from "../../../assets/images/images";

const HeaderSectionB = () => {
  // Local image imports
  const imageLinks = [
    Images.gallery3,
    Images.gallery2,
    Images.gallery3,
    Images.gallery4,
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
                alt={`BNW Developments Background ${index + 1}`}
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
            Exclusive BNW Portfolio
          </span>
          <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
          Discover{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Premium
          </span>{" "}
          BNW Developments
        </h2>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
          Explore our curated collection of BNW’s finest luxury developments across the UAE’s most prestigious locations.
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
          { label: "Communities", value: "02" },
          { label: "New Projects", value: "06" },
          { label: "Gross Development Value", value: "32 Bn+ AED" },
          { label: "ROI", value: "Up to 8%" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-5 shadow-sm border border-gray-200 text-center"
          >
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeaderSectionB;
