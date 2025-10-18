import React, { useEffect, useState, useMemo } from "react";
import { FaPlayCircle, FaMapMarkerAlt, FaBed, FaRulerCombined } from "react-icons/fa";
import { IoBusiness, IoCalendar } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// PropertyCard Component for Featured Properties
const PropertyCard = ({ property, currentImage }) => {
  return (
    <div className="bg-white  shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Slider */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={property.imageUrls[currentImage]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-4 py-2  text-sm font-bold">
            Featured
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2">
          <span className="text-2xl font-bold text-gray-900">{property.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-gray-900">{property.title}</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1  text-sm font-semibold">
            {property.type}
          </span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="text-sm">{property.address}</span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FaBed className="text-blue-600" />
            <span className="text-gray-700 font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined className="text-green-600" />
            <span className="text-gray-700 font-medium">{property.size}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoCalendar className="text-orange-600" />
            <span className="text-gray-700 font-medium">{property.handover}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoBusiness className="text-purple-600" />
            <span className="text-gray-700 font-medium text-sm">{property.paymentPlan}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={`/properties/${property.path}`}
          className="block w-full bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white text-center py-3  font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

// PropertyCardSmall Component for Other Properties
const PropertyCardSmall = ({ property, currentImage }) => {
  return (
    <div className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.imageUrls[currentImage]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-2 py-1  text-xs font-bold">
            Featured
          </div>
        )}
        
        {/* Price */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 ">
          <span className="text-lg font-bold text-gray-900">{property.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{property.title}</h3>
        
        {/* Address */}
        <div className="flex items-center gap-1 text-gray-600 mb-3">
          <FaMapMarkerAlt className="text-red-500 text-xs" />
          <span className="text-xs">{property.address.split(',')[0]}</span>
        </div>

        {/* Quick Details */}
        <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
          <span>{property.bedrooms}</span>
          <span>{property.size.split(' ')[0]}</span>
          <span>{property.handover}</span>
        </div>

        {/* CTA Button */}
        <Link
          to={`/properties/${property.path}`}
          className="block w-full bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white text-center py-2  font-semibold text-sm hover:shadow-md transition-all duration-300"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

const Properties_Features = () => {
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
      path: 'aqua_maya',
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
      path: 'aspirez_danube',
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
      title: "Ocean Pearl",
      address: "Jumeirah Beach Residence, Dubai",
      type: "Beachfront Apartments",
      path: 'ocean_珍珠',
      price: "AED 2.8M",
      bedrooms: "2-3 BR",
      size: "1,200 - 2,800 sq.ft",
      handover: "Q2 2027",
      featured: false,
      paymentPlan: "60/40 Payment Plan"
    },
    {
      imageUrls: [
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
      ],
      title: "Sky Gardens",
      address: "Business Bay, Dubai",
      type: "Luxury Towers",
      path: 'sky_gardens',
      price: "AED 1.9M",
      bedrooms: "1-4 BR",
      size: "800 - 3,200 sq.ft",
      handover: "Q3 2026",
      featured: true,
      paymentPlan: "70/30 Payment Plan"
    },
    {
      imageUrls: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
      ],
      title: "Desert Oasis",
      address: "Dubai Hills Estate, Dubai",
      type: "Villa Community",
      path: 'desert_oasis',
      price: "AED 4.2M",
      bedrooms: "4-6 BR",
      size: "3,500 - 6,000 sq.ft",
      handover: "Q1 2028",
      featured: false,
      paymentPlan: "5 Years Plan"
    },
    {
      imageUrls: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800"
      ],
      title: "Palm Residences",
      address: "Palm Jumeirah, Dubai",
      type: "Waterfront Villas",
      path: 'palm_residences',
      price: "AED 6.5M",
      bedrooms: "5-7 BR",
      size: "4,800 - 7,200 sq.ft",
      handover: "Q4 2027",
      featured: true,
      paymentPlan: "Custom Plan"
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

        {/* Property Cards */}
        <div className="space-y-12">
          {/* Featured Properties */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard
                key={index}
                property={property}
                currentImage={currentImageIndexFeatured[index]}
              />
            ))}
          </div>

          {/* Other Properties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProperties.map((property, index) => (
              <PropertyCardSmall
                key={index}
                property={property}
                currentImage={currentImageIndexOther[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties_Features;