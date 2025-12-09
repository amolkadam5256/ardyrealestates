import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import { FaWhatsapp, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// IMPORT LOCAL IMAGES
import Images from "../../../assets/images/images.js";

// Project data using LOCAL images
const danubeProjects = [
  {
    id: 1,
    name: "Shahrukhz by Danube",
    location: "Sheikh Zayed Road, Dubai",
    type: "Premium Offices",
    price: "From AED 2M",
    specs: ["Shell & Core", "Helipad", "Sky Lounges"],
    image: Images.gallery1,
    tag: "NEW LAUNCH",
    color: "bg-gradient-to-r from-purple-600 to-blue-600"
  },
  {
    id: 2,
    name: "Breeze by Danube",
    location: "Dubai Maritime City",
    type: "Resort Living",
    price: "From AED 1.4M",
    specs: ["Cascading Pools", "Beach Club", "Resort Style"],
    image: Images.gallery2,
    tag: "PREMIUM COLLECTION",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500"
  },
  {
    id: 3,
    name: "Timez by Danube",
    location: "Key Growth Corridor, Dubai",
    type: "Signature Residences",
    price: "From AED 800K",
    specs: ["Studios to 3BR", "Smart Homes", "High ROI"],
    image: Images.gallery3,
    tag: "SIGNATURE",
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  },
  {
    id: 4,
    name: "Elitz by Danube",
    location: "Jumeirah Village Circle",
    type: "Twin Towers",
    price: "From AED 599K",
    specs: ["Amenity Rich", "Strong Demand", "High Returns"],
    image: Images.gallery4,
    tag: "LIFESTYLE",
    color: "bg-gradient-to-r from-green-500 to-emerald-600"
  },
  {
    id: 5,
    name: "Oceanz by Danube",
    location: "Dubai Waterfront",
    type: "Luxury Apartments",
    price: "From AED 3.2M",
    specs: ["Sea Views", "Private Beach", "5-Star Amenities"],
    image: Images.gallery5,
    tag: "LUXURY",
    color: "bg-gradient-to-r from-blue-600 to-teal-500"
  },
  {
    id: 6,
    name: "Skyz by Danube",
    location: "Business Bay",
    type: "Penthouse Collection",
    price: "From AED 5.5M",
    specs: ["Panoramic Views", "Private Pool", "Smart Home"],
    image: Images.gallery6,
    tag: "ULTRA PREMIUM",
    color: "bg-gradient-to-r from-gray-900 to-purple-900"
  },
  {
    id: 7,
    name: "Gardenz by Danube",
    location: "Meydan City",
    type: "Villa Community",
    price: "From AED 4.8M",
    specs: ["Private Garden", "Community Pool", "Kids Play Area"],
    image: Images.gallery7,
    tag: "FAMILY LIVING",
    color: "bg-gradient-to-r from-lime-600 to-green-600"
  },
  {
    id: 8,
    name: "Bayz by Danube",
    location: "Dubai Creek Harbour",
    type: "Waterfront Residences",
    price: "From AED 2.8M",
    specs: ["Creek Views", "Marina Access", "Retail Mall"],
    image: Images.gallery8,
    tag: "WATERFRONT",
    color: "bg-gradient-to-r from-sky-600 to-blue-700"
  },
  {
    id: 9,
    name: "Urbanz by Danube",
    location: "Downtown Dubai",
    type: "City Apartments",
    price: "From AED 1.9M",
    specs: ["City Views", "Gym & Spa", "Rooftop Lounge"],
    image: Images.gallery9,
    tag: "URBAN LIVING",
    color: "bg-gradient-to-r from-rose-600 to-pink-600"
  },
  {
    id: 10,
    name: "Oasis by Danube",
    location: "Al Furjan",
    type: "Gated Community",
    price: "From AED 1.6M",
    specs: ["24/7 Security", "Landscaped Parks", "Community Center"],
    image: Images.gallery10,
    tag: "SECURE LIVING",
    color: "bg-gradient-to-r from-amber-600 to-orange-600"
  }
];

// Fallback
const fallbackImage = Images.gallery1;

const CarouselSectionD = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const handleImageError = (e) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 z-10 py-30">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Danube Properties
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover premium living spaces with exceptional amenities and prime locations across Dubai
        </p>
      </div>

      <button
        ref={navigationPrevRef}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-20 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-all hover:shadow-xl group"
      >
        <FaChevronLeft className="text-gray-700 group-hover:text-blue-600 transition-colors" />
      </button>

      <button
        ref={navigationNextRef}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-20 w-12 h-12 bg-white border border-gray-200 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-all hover:shadow-xl group"
      >
        <FaChevronRight className="text-gray-700 group-hover:text-blue-600 transition-colors" />
      </button>

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
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        speed={800}
        grabCursor={true}
        className="!pb-12"
      >
        {danubeProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 shadow-xl rounded-lg overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={handleImageError}
                />

                <div className={`absolute top-4 left-4 text-white px-3 py-1.5 text-xs font-bold tracking-wide rounded ${project.color}`}>
                  {project.tag}
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-md rounded">
                  <span className="text-sm font-semibold text-gray-900">{project.price}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-gray-700 mb-4 font-medium">{project.type}</p>

                  <div className="space-y-2 mb-4">
                    {project.specs.map((spec, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

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

export default CarouselSectionD;
