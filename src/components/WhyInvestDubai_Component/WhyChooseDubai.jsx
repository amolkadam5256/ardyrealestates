import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMoneyBillWave,
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaBuilding,
  FaUsers,
  FaRocket,
  FaHome,
  FaPlane,
  FaUniversity,
  FaHandshake,
  FaLeaf,
  FaChevronRight,
  FaPlus,
  FaMinus
} from 'react-icons/fa';

const WhyInvestDubai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const investmentAdvantages = [
    {
      icon: FaMoneyBillWave,
      text: "Tax-Free Environment",
      description: "Zero property tax, no capital gains tax, and no income tax on rental income",
      detailedContent: "Dubai offers one of the world's most attractive tax environments for real estate investors. Unlike many global markets, you keep 100% of your rental income and capital appreciation without deductions for property taxes, capital gains taxes, or income taxes on your real estate earnings.",
      benefits: ["No annual property taxes", "Zero capital gains tax", "Tax-free rental income", "No inheritance taxes"],
      gradient: "from-green-500 to-emerald-500",
      delay: 0
    },
    {
      icon: FaChartLine,
      text: "High Rental Yields",
      description: "Consistent returns outperforming global markets",
      detailedContent: "Dubai's rental market delivers exceptional returns, with average yields of 6.9% across the emirate. Apartments typically yield 7.25%, significantly higher than global financial centers like London (2-4%) and New York (3-4%). The strong rental demand driven by population growth ensures steady income streams.",
      benefits: ["6.9% average rental yield", "7.25% apartment yields", "Strong tenant demand", "Outperforms global markets"],
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: FaRocket,
      text: "Strong Capital Appreciation",
      description: "Proven track record of property value growth",
      detailedContent: "Dubai's prime real estate has demonstrated remarkable growth, with villa prices increasing 94% from 2020-2024. Overall prime property values grew 147% over five years, turning a $1 million investment into $2.7 million. The market continues to show robust growth with 22.7% increase in sales volume in H1 2025.",
      benefits: ["147% growth in 5 years", "22.7% sales volume increase", "Luxury market expansion", "Consistent appreciation"],
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: FaUniversity,
      text: "Golden Visa Residency",
      description: "Long-term residency through property investment",
      detailedContent: "Investing AED 2 million or more in Dubai real estate qualifies you for the UAE's 10-year Golden Visa. This provides long-term residency, ability to sponsor family members, and unparalleled travel freedom without minimum stay requirements.",
      benefits: ["10-year residency", "Family sponsorship", "No minimum stay", "Travel flexibility"],
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.3
    },
    {
      icon: FaShieldAlt,
      text: "Safe & Regulated Market",
      description: "RERA-regulated transactions with investor protection",
      detailedContent: "Dubai's real estate market operates under strict RERA (Real Estate Regulatory Agency) regulations, ensuring transparency and protecting investor rights. All transactions are secured through escrow accounts, with clear ownership titles and comprehensive legal frameworks.",
      benefits: ["RERA protection", "Escrow accounts", "Transparent processes", "Legal security"],
      gradient: "from-gray-600 to-gray-800",
      delay: 0.4
    },
    {
      icon: FaGlobe,
      text: "Strategic Global Hub",
      description: "Bridge between East and West with world-class connectivity",
      detailedContent: "Dubai's strategic location connects Europe, Asia, and Africa, with over two-thirds of the world's population within an 8-hour flight. Dubai International Airport, the world's busiest for international traffic, provides unmatched global accessibility for business and travel.",
      benefits: ["Global business hub", "8-hour flight to 80% population", "World's busiest airport", "Trade center"],
      gradient: "from-indigo-500 to-blue-500",
      delay: 0.5
    },
    {
      icon: FaUsers,
      text: "Growing Population & Demand",
      description: "Rising population driving housing demand",
      detailedContent: "Dubai's population reached 3.98 million in 2025, growing by over 100,000 residents annually. The Dubai 2040 Urban Master Plan projects growth to 5.8 million people, ensuring continuous demand for housing and supporting long-term property values.",
      benefits: ["3.98M population", "100K annual growth", "5.8M by 2040 target", "Sustainable demand"],
      gradient: "from-red-500 to-pink-500",
      delay: 0.6
    },
    {
      icon: FaBuilding,
      text: "World-Class Infrastructure",
      description: "Modern amenities and sustainable developments",
      detailedContent: "Dubai boasts state-of-the-art infrastructure including the Dubai Metro, world-class healthcare, international schools, and sustainable communities. Ongoing projects like Dubai Creek Harbour and Mohammed Bin Rashid City demonstrate continuous investment in urban development.",
      benefits: ["Modern transportation", "Premium amenities", "Sustainable communities", "Ongoing development"],
      gradient: "from-teal-500 to-green-500",
      delay: 0.7
    },
    {
      icon: FaPlane,
      text: "Thriving Tourism Industry",
      description: "Record-breaking visitor numbers supporting short-term rentals",
      detailedContent: "Dubai welcomed 9.58 million overnight visitors in H1 2025, with projections of 22 million annual tourists. This booming tourism sector creates lucrative opportunities for short-term rentals and holiday homes, with hotel occupancy rates exceeding 80%.",
      benefits: ["9.58M H1 2025 visitors", "22M annual projection", "80.6% hotel occupancy", "Holiday home demand"],
      gradient: "from-orange-500 to-red-500",
      delay: 0.8
    },
    {
      icon: FaHandshake,
      text: "Flexible Payment Plans",
      description: "Developer payment plans making investment accessible",
      detailedContent: "Dubai's off-plan market offers attractive payment plans including post-handover options, construction-linked payments, and extended terms over several years. This flexibility makes premium properties accessible with lower initial investments.",
      benefits: ["Post-handover plans", "Construction-linked", "Extended terms", "Low down payments"],
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.9
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
            <span className="text-sm font-semibold text-gray-700 tracking-wide">WHY INVEST IN DUBAI</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Dubai Real Estate</span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover unparalleled investment opportunities in one of the world's fastest-growing real estate markets
          </p>
        </motion.div>

        {/* Market Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-2xl lg:text-3xl font-bold text-[#2182BF] mb-2">6.9%</div>
            <div className="text-sm text-gray-600">Average Rental Yield</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-2xl lg:text-3xl font-bold text-[#2182BF] mb-2">147%</div>
            <div className="text-sm text-gray-600">5-Year Price Growth</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-2xl lg:text-3xl font-bold text-[#2182BF] mb-2">0%</div>
            <div className="text-sm text-gray-600">Property Tax</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-2xl lg:text-3xl font-bold text-[#2182BF] mb-2">3.98M</div>
            <div className="text-sm text-gray-600">Population (2025)</div>
          </div>
        </motion.div>

        {/* Investment Advantages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8"
        >
          {investmentAdvantages.map((advantage, index) => (
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
                      <div className={`w-14 h-14 bg-gradient-to-br ${advantage.gradient} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        <advantage.icon className="text-xl" />
                      </div>

                      {/* Title and Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {advantage.text}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {advantage.description}
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
                            Investment Insight
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {advantage.detailedContent}
                          </p>
                        </div>

                        {/* Benefits List */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                            Key Advantages
                          </h4>
                          <div className="grid gap-2">
                            {advantage.benefits.map((benefit, benefitIndex) => (
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
                          <span>Explore Investment Opportunities</span>
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Invest in Dubai?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of smart investors capitalizing on Dubai's booming real estate market. Get personalized investment guidance and exclusive property access.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2182BF] px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Investment Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvestDubai;