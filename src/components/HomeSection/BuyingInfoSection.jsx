import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaHandshake, 
  FaChartLine, 
  FaBook, 
  FaLightbulb, 
  FaArrowRight,
  FaUsers,
  FaMapMarkerAlt,
  FaUserTie,
  FaCalendarAlt,
  FaBuilding,
  FaShieldAlt,
  FaPhoneAlt,
  FaSearch
} from 'react-icons/fa';
import { 
  IoBusiness,
  IoLocation,
  IoPeople,
  IoTime
} from 'react-icons/io5';
import { 
  MdRealEstateAgent,
  MdAttachMoney,
  MdAnalytics,
  MdVerified
} from 'react-icons/md';

const statsData = [
    { value: "2009", label: "THE YEAR WE WERE BORN", icon: <IoTime className="text-3xl text-blue-600" /> },
    { value: "51,000+", label: "REGISTERED BUYERS", icon: <IoPeople className="text-3xl text-green-600" /> },
    { value: "60+", label: "COMMUNITIES COVERED", icon: <IoLocation className="text-3xl text-purple-600" /> },
    { value: "270+", label: "PROFESSIONAL AGENTS", icon: <IoBusiness className="text-3xl text-red-600" /> },
];

const linksData = [
    { text: "Why Buy through Ardy?", icon: <FaLightbulb className="text-xl text-yellow-500" />, description: "Discover our unique approach" },
    { text: "Sales Conveyancing", icon: <MdRealEstateAgent className="text-xl text-blue-500" />, description: "Seamless transaction process" },
    { text: "Mortgage Services", icon: <MdAttachMoney className="text-xl text-green-500" />, description: "Best financing solutions" },
    { text: "Market Analytics", icon: <MdAnalytics className="text-xl text-purple-500" />, description: "Data-driven insights" },
    { text: "Buyer's Guide", icon: <FaBook className="text-xl text-red-500" />, description: "Complete property handbook" },
];

// Helper component for the list items in "Explore Buying"
const ExploreLink = ({ text, icon, description }) => (
    <motion.li 
        whileHover={{ x: 8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-start space-x-4 group cursor-pointer p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
    >
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100">
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <h3 className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300 font-semibold text-base">
                {text}
            </h3>
            <p className="text-gray-500 text-sm mt-1 group-hover:text-gray-600 transition-colors duration-300">
                {description}
            </p>
        </div>
        <motion.div
            initial={{ x: -5, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="text-[#BF364F] flex-shrink-0 mt-2"
        >
            <FaArrowRight size={16} />
        </motion.div>
    </motion.li>
);

// Helper component for each statistic item
const StatItem = ({ value, label, icon }) => (
    <motion.div 
        whileHover={{ scale: 1.05, y: -8 }}
        whileTap={{ scale: 0.95 }}
        className="text-center px-6 py-8 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-transparent hover:border-gray-100"
    >
        <motion.div 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm border border-gray-100 mb-4 group-hover:shadow-md transition-all duration-300"
        >
            {icon}
        </motion.div>
        <motion.p 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F] tracking-tight mb-2"
        >
            {value}
        </motion.p>
        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium max-w-[140px] mx-auto leading-relaxed">
            {label}
        </p>
    </motion.div>
);

const BuyingInfoSection = () => {
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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/50 w-full overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2182BF]/5 to-[#BF364F]/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#BF364F]/3 to-[#2182BF]/3 rounded-full blur-3xl -translate-x-48 translate-y-48"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(33,130,191,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(33,130,191,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="px-6 py-20 lg:px-16 lg:py-28">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20"
                    >
                        {/* Main Content */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 mb-8 border border-gray-200 shadow-sm">
                                <div className="w-3 h-3 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-gray-700 tracking-wide">YOUR TRUSTED REAL ESTATE PARTNER</span>
                                <MdVerified className="text-blue-500 text-lg" />
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                                Find Your Perfect{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] via-[#BF364F] to-[#2182BF] animate-gradient-x">
                                    Dream Home
                                </span>
                                {' '}in Dubai
                            </h1>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed font-sans max-w-4xl"
                            >
                                Dubai offers an extraordinary lifestyle with unparalleled real estate opportunities. From breathtaking sea-view villas to sophisticated city apartments, discover properties that match your aspirations.{' '}
                                <motion.a 
                                    whileHover={{ scale: 1.02 }}
                                    href="#" 
                                    className="text-[#BF364F] font-semibold hover:underline inline-flex items-center gap-2 bg-red-50 px-2 py-1 rounded-lg"
                                >
                                    <FaSearch size={14} />
                                    Explore Dubai Properties
                                    <FaArrowRight size={12} />
                                </motion.a>
                            </motion.p>

                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-wrap gap-4 mt-10"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#"
                                    className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
                                >
                                    <FaBuilding className="text-lg" />
                                    View Premium Properties
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="#"
                                    className="bg-white text-gray-700 px-8 py-4 rounded-2xl font-semibold border border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 group hover:border-gray-400"
                                >
                                    <FaPhoneAlt className="text-lg text-[#2182BF]" />
                                    Consult Our Experts
                                    <FaHandshake className="group-hover:scale-110 transition-transform duration-300" />
                                </motion.a>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-200"
                            >
                                <div className="flex items-center gap-3">
                                    <FaShieldAlt className="text-2xl text-green-500" />
                                    <span className="text-sm text-gray-600 font-medium">Verified Properties</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaChartLine className="text-2xl text-blue-500" />
                                    <span className="text-sm text-gray-600 font-medium">Market Insights</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MdVerified className="text-2xl text-purple-500" />
                                    <span className="text-sm text-gray-600 font-medium">Legal Compliance</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Explore Buying Section */}
                        <motion.div variants={itemVariants} className="lg:pl-6">
                            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-2 h-8 bg-gradient-to-b from-[#2182BF] to-[#BF364F] rounded-full"></div>
                                    <h2 className="text-2xl font-bold text-gray-900">Explore Buying</h2>
                                </div>
                                <p className="text-gray-500 text-sm mb-8 font-medium">
                                    Comprehensive services for your property journey
                                </p>
                                <ul className="space-y-3">
                                    {linksData.map((link, index) => (
                                        <motion.div
                                            key={link.text}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 0.3 }}
                                            viewport={{ once: true }}
                                        >
                                            <ExploreLink text={link.text} icon={link.icon} description={link.description} />
                                        </motion.div>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-32"
                    >
                        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
                            <div className="text-center mb-16">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2182BF]/10 to-[#BF364F]/10 rounded-2xl px-6 py-3 mb-6 border border-[#2182BF]/20"
                                >
                                    <FaChartLine className="text-[#2182BF] text-xl" />
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                        Trusted by Thousands
                                    </h3>
                                </motion.div>
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                                    Over a decade of excellence in Dubai's dynamic real estate market
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                {statsData.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: index * 0.15 + 0.6, type: "spring" }}
                                        viewport={{ once: true }}
                                    >
                                        <StatItem value={stat.value} label={stat.label} icon={stat.icon} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BuyingInfoSection;