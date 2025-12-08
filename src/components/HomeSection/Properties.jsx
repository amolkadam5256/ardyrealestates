import React, { useEffect, useState, useMemo } from "react";
import { FaPlayCircle, FaMapMarkerAlt, FaBed, FaRulerCombined } from "react-icons/fa";
import { IoBusiness, IoCalendar } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Properties = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const featuredProperties = useMemo(() => [
    {
      imageUrls: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
      ],
      title: "Aqua Maya",
      address: "Al Marjan Island, Ras Al Khaimah",
      type: "Luxury Residences",
      path: 'bnw-properties',
      price: "AED 1.7M",
      bedrooms: "1-4 BR",
      size: "Up to 5,121 sq.ft",
      handover: "Q4 2027",
      featured: true,
      paymentPlan: "50/50 Payment Plan"
    },
    {
      imageUrls: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
      ],
      title: "Aspirez By Danube",
      address: "Dubai Sports City, Dubai",
      type: "Premium Homes & Offices",
      path: 'danube-properties',
      price: "AED 850K",
      bedrooms: "Studio - 3BR",
      size: "Flexible Units",
      handover: "Q4 2028",
      featured: true,
      paymentPlan: "6.5 Years Payment Plan"
    }
  ], []);

const otherProperties = useMemo(() => [
  {
    imageUrls: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
    ],
    title: "Aqua Maya",
    address: "Al Marjan Island, Ras Al Khaimah",
    type: "Waterfront Residences",
    path: "bnw-properties",
    price: "AED 1.7M - 10.38M",
    bedrooms: "1-4 BR + Retail",
    size: "715 - 5,121 sq.ft",
    handover: "Q4 2027",
    featured: true,
    paymentPlan: "50/50 Payment Plan",
    developer: "BNW Developments",
    highlights: ["Fully Furnished", "Waterfront Living", "G+9 | 99 Units", "Retail Space Available"],
    contact: {
      name: "Drishti Chadha",
      phone: "+971 523977102",
      position: "Sales Manager, BNW Developments"
    }
  },
  {
    imageUrls: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
    ],
    title: "Aspirz By Danube",
    address: "Dubai Sports City, Dubai",
    type: "Premium Homes & Offices",
    path: "danube-properties",
    price: "AED 850K - 2.5M",
    bedrooms: "Offices & 1-3 BR Apartments",
    size: "Various Sizes",
    handover: "Q4 2028",
    featured: true,
    paymentPlan: "6.5 Years Payment Plan",
    developer: "Danube Properties",
    highlights: ["Fully Furnished", "2B+G+7P+40+Roof", "Mixed Use", "Pre-Launch Offer"],
    structure: {
      residential: "Level 17-40",
      offices: "Level 2-15",
      totalFloors: 40
    }
  },
  {
    imageUrls: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
    ],
    title: "Breez By Danube",
    address: "Dubai Maritime City, Dubai",
    type: "Residential Tower",
    path: "danube-properties",
    price: "AED 1.3M - 30M",
    bedrooms: "Studio - 5 BR Villas",
    size: "Various Sizes",
    handover: "March 2029",
    featured: true,
    paymentPlan: "6 Year Payment Plan",
    developer: "Danube Properties",
    highlights: ["Tallest Tower in Area", "40+ Amenities", "Fully Furnished", "60 Floors"],
    unitTypes: {
      studio: "AED 1.3M - 1.7M",
      oneBed: "AED 1.975M - 3M",
      twoBed: "AED 3.75M - 4M",
      threeBed: "AED 5M - 5.5M",
      fourBed: "AED 10M",
      fiveBed: "AED 30M"
    }
  },
  {
    imageUrls: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
    ],
    title: "FashionTV Acacia",
    address: "Al Marjan Island, Ras Al Khaimah",
    type: "Luxury Residences",
    path: "bnw-properties",
    price: "Premium Pricing",
    bedrooms: "1-4 BR + Penthouses",
    size: "Various Sizes",
    handover: "Coming Soon",
    featured: true,
    paymentPlan: "Flexible Plans",
    developer: "BNW Developments",
    highlights: ["Architecture + Lifestyle + Fashion", "Fully Furnished", "First of its Kind", "Exclusive Launch"]
  }
], []);

  const [currentImageIndexFeatured, setCurrentImageIndexFeatured] = useState(
    Array(featuredProperties.length).fill(0)
  );
  const [currentImageIndexOther, setCurrentImageIndexOther] = useState(
    Array(otherProperties.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexFeatured(prev =>
        prev.map((index, i) => (index + 1) % featuredProperties[i].imageUrls.length)
      );
      setCurrentImageIndexOther(prev =>
        prev.map((index, i) => (index + 1) % otherProperties[i].imageUrls.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredProperties, otherProperties]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 mb-6 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">PREMIUM DUBAI PROPERTIES</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Home in Dubai</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed text-left">
              ARDY Real Estate brings you exclusive properties in Dubai's most sought-after locations.
              From luxurious waterfront residences to premium urban living spaces, we offer unparalleled
              investment opportunities in the heart of UAE.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed text-left">
              With flexible payment plans and hand-picked developments, we make your real estate journey
              seamless. Explore our curated collection of premium properties designed for modern living
              and exceptional returns.
            </p>
          </div>
        </div>

        {/* Properties Grid - First 2 cards larger, then 4 cards smaller */}
        <div className="space-y-12">
          {/* First 2 Larger Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                {/* Image Slider */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.imageUrls[currentImageIndexFeatured[index]]}
                    alt={property.title}
                    className="w-full h-72 lg:h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Black Layer Between Image and Content */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-4 py-2 text-sm font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Payment Plan Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 text-xs font-medium shadow-sm">
                      {property.paymentPlan}
                    </span>
                  </div>
                </div>

                {/* Content Section with Black Background */}
                <div className="bg-black text-white p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <IoBusiness className="text-blue-300" />
                    <span className="text-sm font-medium text-blue-300">{property.type}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm">{property.address}</span>
                  </div>

                  {/* Property Features */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <FaBed className="text-blue-300" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaRulerCombined className="text-green-300" />
                      <span>{property.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <IoCalendar className="text-yellow-300" />
                      <span>{property.handover}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div>
                      <p className="text-sm text-gray-300">Starting from</p>
                      <p className="text-xl lg:text-2xl font-bold text-white">
                        {property.price}
                      </p>
                    </div>

                    <Link
                      to={`/projects/${property.path}`}
                      className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 font-semibold transition-all duration-300 group/btn border border-white/30 hover:border-white/50"
                    >
                      <span>View Details</span>
                      <FaPlayCircle className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Additional Info Bar */}
                <div className="p-4 bg-gray-900 border-t border-gray-700">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span className="font-medium">Exclusive Pre-Launch Offer</span>
                    <span className="text-[#BF364F] font-semibold">Fully Furnished</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next 4 Smaller Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProperties.map((property, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100 + 200}
                className="relative bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
              >
                {/* Image Slider */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.imageUrls[currentImageIndexOther[index]]}
                    alt={property.title}
                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Black Layer Between Image and Content */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-2 py-1 text-xs font-semibold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Payment Plan Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 text-xs font-medium shadow-sm">
                      {property.paymentPlan}
                    </span>
                  </div>
                </div>

                {/* Content Section with Black Background */}
                <div className="bg-black text-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IoBusiness className="text-blue-300 text-xs" />
                    <span className="text-xs font-medium text-blue-300">{property.type}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-2 leading-tight">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <FaMapMarkerAlt className="text-xs" />
                    <span className="text-xs">{property.address}</span>
                  </div>

                  {/* Property Features */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-1 text-xs">
                      <FaBed className="text-blue-300" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <FaRulerCombined className="text-green-300" />
                      <span>{property.size}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      <IoCalendar className="text-yellow-300" />
                      <span>{property.handover}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                    <div>
                      <p className="text-xs text-gray-300">Starting from</p>
                      <p className="text-lg font-bold text-white">
                        {property.price}
                      </p>
                    </div>

                    <Link
                      to={`/projects/${property.path}`}
                      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-3 py-2 text-sm font-semibold transition-all duration-300 group/btn border border-white/30 hover:border-white/50"
                    >
                      <span>View</span>
                      <FaPlayCircle className="group-hover/btn:translate-x-1 transition-transform duration-300 text-xs" />
                    </Link>
                  </div>
                </div>

                {/* Additional Info Bar */}
                <div className="p-3 bg-gray-900 border-t border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span className="font-medium">Pre-Launch</span>
                    <span className="text-[#BF364F] font-semibold">Furnished</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Properties;