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
      path: 'ocean_pearl',
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

        {/* CTA Section */}
        <div className="text-center mt-16 relative overflow-hidden" data-aos="fade-up">
          <div className="relative  p-6 lg:p-10 text-white shadow-2xl overflow-hidden">
            {/* Background Dubai Images with Overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dubai Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2182BF]/50 to-[#BF364F]/50"></div>
            </div>

            {/* Floating Dubai Icons */}
            <div className="absolute top-3 left-6 opacity-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2778/2778036.png"
                alt="Burj Khalifa"
                className="w-8 h-8"
              />
            </div>
            <div className="absolute bottom-3 right-6 opacity-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2778/2778037.png"
                alt="Palm Jumeirah"
                className="w-10 h-10"
              />
            </div>
            <div className="absolute top-6 right-12 opacity-15">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2778/2778038.png"
                alt="Dubai Marina"
                className="w-12 h-12"
              />
            </div>

            {/* Animated Floating Elements */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-white/5 rounded-full animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 mb-4 border border-white/30">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-1xl font-semibold text-white tracking-wide">EXCLUSIVE DUBAI INVESTMENTS</span>
              </div>

              <h3 className="text-xl lg:text-5xl font-bold mb-4 leading-tight">
                Ready to Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Dubai's Future?</span>
              </h3>

              <p className="text-sm lg:text-base text-gray-50 font-semibold mb-6 max-w-2xl mx-auto leading-relaxed">
                Join thousands of successful investors who have trusted ARDY Real Estate for premium property acquisitions in the world's most dynamic market
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6 mb-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-white mb-1">15K+</div>
                  <div className="text-blue-200 text-xs font-medium">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-white mb-1">98%</div>
                  <div className="text-blue-200 text-xs font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-white mb-1">AED 2.5B</div>
                  <div className="text-blue-200 text-xs font-medium">Portfolio Value</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-[#2182BF] px-6 py-3 font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  Book Free Consultation
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:shadow-lg transform hover:-translate-y-1 flex items-center gap-2 group">
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  View All Properties
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs font-semibold">Verified Properties</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs font-semibold">Legal Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-xs font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;