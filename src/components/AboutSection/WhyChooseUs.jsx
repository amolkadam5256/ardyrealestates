import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHandshake,
  FaStar,
  FaAward,
  FaBuilding,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
  FaHeadset,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaPlus,
  FaMinus,
  FaChevronRight
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const features = [
    {
      icon: FaHandshake,
      text: "Exclusive Developer Partnerships",
      description: "Direct partnerships with Danube Properties & BNW Realty for priority access",
      detailedContent: "Our exclusive partnerships give you first access to premium developments, special pricing, and insider market information. Work directly with Dubai's most reputable developers through our established relationships.",
      benefits: ["Priority access to new launches", "Special partner pricing", "Direct developer communication", "Early booking advantages"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: FaRocket,
      text: "Pre-Launch Investment Opportunities",
      description: "Get first access to new developments before public release",
      detailedContent: "Be among the first to invest in upcoming projects with significant early-bird advantages. Our pre-launch opportunities often include better pricing, preferred unit selection, and enhanced payment plans.",
      benefits: ["Best unit selection", "Lower entry prices", "Flexible payment terms", "Higher ROI potential"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.1
    },
    {
      icon: FaMoneyBillWave,
      text: "Flexible Payment Plans",
      description: "Customized payment solutions tailored to your financial goals",
      detailedContent: "Choose from various payment options including post-handover plans, construction-linked payments, and customized schedules that align with your financial capabilities and investment strategy.",
      benefits: ["Post-handover payments", "Construction-linked plans", "Custom schedules", "Bank coordination"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      icon: FaBuilding,
      text: "Fully Furnished Luxury Residences",
      description: "Move-in ready properties with premium interior designs",
      detailedContent: "Our portfolio includes beautifully furnished residences with high-end finishes, smart home technology, and luxury amenities. Save time and money with our turnkey property solutions.",
      benefits: ["Premium furnishings", "Smart home technology", "Luxury amenities", "Ready to move in"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      icon: FaUsers,
      text: "Dedicated Client Support Team",
      description: "Personalized service from Dubai & Ras Al Khaimah experts",
      detailedContent: "Each client receives a dedicated relationship manager who provides end-to-end support from property selection to post-purchase services, ensuring a seamless real estate experience.",
      benefits: ["Personal relationship manager", "End-to-end support", "Multi-lingual team", "24/7 availability"],
      gradient: "from-indigo-500 to-blue-500",
      delay: 0.4
    },
    {
      icon: FaChartLine,
      text: "Market Insight & Analytics",
      description: "Data-driven investment advice for maximum returns",
      detailedContent: "Leverage our comprehensive market research, investment analysis, and future growth projections to make informed decisions that maximize your return on investment in Dubai's dynamic property market.",
      benefits: ["Market trend analysis", "ROI projections", "Area growth potential", "Investment strategies"],
      gradient: "from-teal-500 to-blue-500",
      delay: 0.5
    },
    {
      icon: FaShieldAlt,
      text: "Legal Compliance & Security",
      description: "100% legally compliant transactions with full documentation",
      detailedContent: "Rest assured with our thorough due diligence process, legal verification, and complete transparency in all transactions. We ensure full compliance with RERA regulations and Dubai property laws.",
      benefits: ["RERA compliance", "Legal verification", "Document processing", "Transaction security"],
      gradient: "from-gray-600 to-gray-800",
      delay: 0.6
    },
    {
      icon: FaHeadset,
      text: "24/7 Customer Support",
      description: "Round-the-clock assistance in multiple languages",
      detailedContent: "Our multilingual support team is available 24/7 to assist with property viewings, document processing, and any queries you may have throughout your real estate journey in Dubai.",
      benefits: ["Multilingual support", "Instant response", "Video consultations", "Document assistance"],
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.7
    },
    {
      icon: FaMapMarkerAlt,
      text: "Prime Location Expertise",
      description: "In-depth knowledge of Dubai's most valuable neighborhoods",
      detailedContent: "Benefit from our extensive knowledge of Dubai's prime locations, upcoming developments, and neighborhood insights to choose the perfect property that matches your lifestyle and investment goals.",
      benefits: ["Area expertise", "Future development insights", "Neighborhood analysis", "Location matching"],
      gradient: "from-red-500 to-pink-500",
      delay: 0.8
    }
  ];

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-x-48 translate-y-48"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 mb-6 border border-gray-200 shadow-sm rounded-lg"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">WHY CHOOSE ARDY</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">ARDY Advantage</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience unparalleled servicx e, exclusive opportunities, and expert guidance in Dubai's dynamic real estate market
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              {/* Main Rectangle Card */}
              <div
                className={`bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer ${openIndex === index ? 'ring-2 ring-[#2182BF] shadow-2xl' : ''
                  }`}
                onClick={() => toggleFeature(index)}
              >
                {/* Header Rectangle */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      {/* Icon Container */}
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        <feature.icon className="text-xl" />
                      </div>

                      {/* Title and Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {feature.text}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ml-4 flex-shrink-0 ${openIndex === index
                          ? 'bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                        }`}
                    >
                      {openIndex === index ? (
                        <FaMinus className="text-xs" />
                      ) : (
                        <FaPlus className="text-xs" />
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Detailed Content Rectangle */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-gray-50 border-t border-gray-200">
                        {/* Detailed Description */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                            Detailed Overview
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {feature.detailedContent}
                          </p>
                        </div>

                        {/* Benefits List */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                            Key Benefits
                          </h4>
                          <div className="grid gap-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                              <motion.div
                                key={benefitIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: benefitIndex * 0.1 }}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#2182BF]/30 transition-colors duration-200"
                              >
                                <div className="w-6 h-6 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded flex items-center justify-center flex-shrink-0">
                                  <FaChevronRight className="text-white text-xs" />
                                </div>
                                <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-6 bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>Learn More About This Service</span>
                          <FaChevronRight className="text-sm" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-3 h-3 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-700">Interactive Features</p>
              <p className="text-xs text-gray-600">Click on any service to explore detailed benefits and information</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;