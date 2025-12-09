import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaWhatsapp, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// FIXED IMAGE IMPORT - make sure ../../../assets/images/images.js exports gallery1..gallery8 and fallback
import Images from "../../../assets/images/images.js";

const bnwProjects = [
  {
    name: "La Perla",
    location: "Al Marjan Island, Ras Al Khaimah",
    bedrooms: "1, 2, 3 Bedroom Apartments",
    description:
      "Spacious apartments, penthouses & duplexes with Spanish courtyards and modern loft aesthetics.",
    price: "AED 2.16 Million",
    image: Images.gallery1,
    tag: "Luxury Waterfront",
    color: "bg-gradient-to-r from-blue-600 to-cyan-500",
  },
  {
    name: "Aqua Maya",
    location: "Al Marjan Island, Ras Al Khaimah",
    bedrooms: "1, 2, 3, 4 Bedroom Apartments",
    description: "Coastal living with soulful luxury and retail spaces.",
    price: "AED 1.78 Million",
    image: Images.gallery2,
    tag: "Coastal Luxury",
    color: "bg-gradient-to-r from-cyan-500 to-blue-700",
  },
  {
    name: "Acacia",
    location: "Dubai",
    bedrooms: "1 - 3 BR Apartments, 4 BR Penthouses",
    description:
      "Introducing Acacia by BNW Developments – Fashion Finds A New Address.",
    price: "AED 1.96 Million",
    image: Images.gallery3,
    tag: "Fashion Luxury",
    color: "bg-gradient-to-r from-purple-600 to-pink-500",
  },
  {
    name: "TAJ Wellington Mews",
    location: "Dubai",
    bedrooms: "Studio, 1, 2, 3 Bedroom Apartments",
    description:
      "A confluence of heritage and innovation, crafted with refined luxury by BNW.",
    price: "AED 1.5 Million",
    image: Images.gallery4,
    tag: "Identity & Luxury",
    color: "bg-gradient-to-r from-orange-500 to-red-600",
  },
  {
    name: "Aquino",
    location: "Al Marjan Island, Ras Al Khaimah",
    bedrooms: "1, 2, 3 Bedroom Apartments",
    description:
      "A striking waterfront sanctuary curated for those who admire artistry in every tide.",
    price: "AED 1.63 Million",
    image: Images.gallery5,
    tag: "Waterfront Living",
    color: "bg-gradient-to-r from-teal-600 to-blue-600",
  },
  {
    name: "Pelagia",
    location: "Al Marjan Island, Ras Al Khaimah",
    bedrooms: "1, 2, 3, 4 Bedroom Apartments",
    description:
      "Sophisticated waterfront living with exclusive retail spaces.",
    price: "AED 2.3 Million",
    image: Images.gallery6,
    tag: "Ultra Waterfront",
    color: "bg-gradient-to-r from-sky-600 to-indigo-600",
  },
  {
    name: "Aqua Arc",
    location: "Al Marjan Island, Ras Al Khaimah",
    bedrooms: "1, 2, 3 Bedroom Apartments & Penthouses",
    description:
      "Ultra-luxury collection blending sophistication & Arabian Gulf views.",
    price: "AED 2.3 Million",
    image: Images.gallery7,
    tag: "Ultra Luxury",
    color: "bg-gradient-to-r from-gray-900 to-blue-900",
  },
  {
    name: "Ramada Residences by Wyndham",
    location: "Al Jaddaf, Dubai",
    bedrooms: "1, 2 Bedroom Apartments",
    description:
      "Smart design, timeless finishes & wellness-driven amenities.",
    price: "AED 1.85 Million",
    image: Images.gallery8,
    tag: "Smart Luxury",
    color: "bg-gradient-to-r from-yellow-600 to-orange-500",
  },
];

const BNWCarousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="relative max-w-7xl mx-auto px-4 z-10 py-30">

      {/* Navigation Buttons (visually outside Swiper but controlled via onBeforeInit) */}
      <button
        ref={navigationPrevRef}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-20 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      <button
        ref={navigationNextRef}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-20 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 3.5 },
        }}
        onBeforeInit={(swiper) => {
          // Attach navigation refs after they exist
          if (typeof swiper.params !== "undefined") {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="!pb-12"
      >
        {bnwProjects.map((project, index) => (
          <SwiperSlide key={`bnw-${index}`}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image || Images.fallback || "/fallback.jpg"}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = Images.fallback || "/fallback.jpg";
                  }}
                />

                <div className={`absolute top-4 left-4 text-white px-3 py-1.5 text-xs font-bold tracking-wide rounded ${project.color}`}>
                  {project.tag}
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-md rounded">
                  <span className="text-sm font-semibold text-gray-900">Starting {project.price}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-all">
                  {project.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-gray-700 mb-3 font-medium">{project.bedrooms}</p>

                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <Link
                  to="/contact"
                  className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition-all rounded-md group/btn"
                  aria-label={`Enquire about ${project.name}`}
                >
                  <FaWhatsapp className="text-lg" />
                  <span>Enquire Now</span>
                  <div className="w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">
                    →
                  </div>
                </Link>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BNWCarousel;
