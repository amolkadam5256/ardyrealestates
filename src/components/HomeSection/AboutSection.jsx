import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaUsers, FaStar, FaAward, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { IoBusiness, IoRocket, IoDiamond } from 'react-icons/io5';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 py-10 lg:py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 mb-6 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">ABOUT ARDY REAL ESTATE</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Connecting You to Dubai's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Most Prestigious</span> Developments
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Powered by Majestic Group - Your trusted partner in premium Dubai real estate investments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Who We Are */}
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2182BF] to-[#BF364F] rounded-lg flex items-center justify-center text-white">
                <IoBusiness className="text-xl" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Who We Are</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              ARDY Real Estate is the Dubai-based extension of the Majestic Group, bringing years of expertise in real estate 
              and investment to the UAE's dynamic property market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We represent some of the most reputed developers in the region - <strong>Danube Properties</strong> and <strong>BNW Realty</strong> -
              providing investors and homeowners with premium real estate opportunities supported by transparency, expertise, and trust.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#2182BF] to-[#BF364F] rounded-xl p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <IoRocket className="text-xl" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              Deliver exceptional property opportunities with trust, transparency, and high returns, helping clients make 
              smart, long-term investments in real estate.
            </p>
          </motion.div>
        </motion.div>

        {/* Developer Partners */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Our Developer Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Danube Properties */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FaBuilding className="text-2xl text-[#2182BF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Danube Properties</h3>
                  <p className="text-gray-600">Leading UAE Developer</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A leading UAE developer known for innovation, premium design, and flexible payment plans. 
                Our collaboration focuses exclusively on Dubai-based residential and commercial projects.
              </p>
            </div>

            {/* BNW Realty */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                  <IoDiamond className="text-2xl text-[#BF364F]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">BNW Realty</h3>
                  <p className="text-gray-600">Luxury Waterfront Specialists</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Specialists in luxury waterfront residences and lifestyle communities across Dubai and Ras Al Khaimah. 
                Premium design, strategic locations, and lifestyle-focused developments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Why Choose ARDY Real Estate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FaHandshake, text: "Exclusive partnerships with Danube & BNW Realty" },
              { icon: FaStar, text: "Access to pre-launch offers and premium inventory" },
              { icon: FaAward, text: "Flexible payment plans and limited-time promotions" },
              { icon: FaBuilding, text: "Fully furnished luxury residences" },
              { icon: FaUsers, text: "Dedicated Dubai & RAK marketing support" },
              { icon: FaGlobe, text: "Personalized investment guidance" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2182BF] to-[#BF364F] rounded-lg flex items-center justify-center text-white mb-4">
                  <item.icon className="text-lg" />
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default AboutSection;