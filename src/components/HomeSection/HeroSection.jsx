import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const dubaiLocations = [
    {
      id: 1,
      title: "Palm Jumeirah",
      description: "World's Largest Man-Made Island",
      properties: "120+ Luxury Villas",
      investment: "25% ROI Potential",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 2,
      title: "Downtown Dubai",
      description: "Heart of Modern Dubai",
      properties: "80+ Premium Apartments",
      investment: "18% Annual Growth",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    },
    {
      id: 3,
      title: "Dubai Marina",
      description: "Luxury Waterfront Living",
      properties: "Exclusive Residences",
      investment: "22% ROI Projected",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dubaiLocations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dubaiLocations.length) % dubaiLocations.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          ...formData,
          subject: "New Lead from Ardy Real Estate",
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: '' });
        if (window.innerWidth < 1024) {
          setTimeout(() => setShowForm(false), 2000);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const slideVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 1.1,
      opacity: 0,
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const mobileFormVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-900 py-14">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${dubaiLocations[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <AnimatePresence>
        {(!showForm || window.innerWidth >= 1024) && (
          <>
            <motion.button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-base md:text-lg font-bold">←</div>
                </div>
                <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  Previous
                </div>
              </div>
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="flex items-center space-x-2">
                <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  Next
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white text-base md:text-lg font-bold">→</div>
                </div>
              </div>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Location Indicators */}
      <div className={`absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 transition-opacity duration-300 ${showForm ? 'opacity-0' : 'opacity-100'}`}>
        {dubaiLocations.map((location, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="flex flex-col items-center group"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#2182BF] scale-125' : 'bg-white/50'
            }`} />
            <span className={`text-xs transition-all duration-300 hidden md:block mt-1 ${
              index === currentSlide ? 'text-white font-medium' : 'text-white/60'
            }`}>
              {location.title.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content - Reduced top space and increased font sizes */}
      <div className="relative z-10 container mx-auto px-3 md:px-4 h-auto flex items-center pt-4 md:pt-6 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full items-center">
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#2182BF] rounded-full mb-4 md:mb-5"
            >
              <span className="text-sm md:text-base font-medium">Premium Properties</span>
            </motion.div>

            {/* Dynamic Location Title */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 md:mb-5"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mb-2">
                {dubaiLocations[currentSlide].title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300">
                {dubaiLocations[currentSlide].description}
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 leading-tight"
            >
              Find Your
              <span className="block bg-gradient-to-r from-[#2182BF] to-[#BF364F] bg-clip-text text-transparent">
                Dream Property
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-5 md:mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Discover exclusive properties in Dubai's most prestigious locations. 
              Your perfect investment opportunity awaits.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-base md:text-lg">
                View Properties
              </button>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-base md:text-lg lg:hidden"
              >
                Get Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 text-base md:text-lg hidden lg:block">
                Contact Agent
              </button>
            </motion.div>

            {/* Quick Stats - Mobile Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center space-x-8 mt-6 lg:hidden"
            >
              <div className="text-center">
                <div className="text-xl font-bold text-[#2182BF]">500+</div>
                <div className="text-sm text-gray-300">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#BF364F]">95%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-400">10+</div>
                <div className="text-sm text-gray-300">Years</div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl max-w-md">
              <h3 className="text-xl font-bold text-white mb-3">Get Expert Advice</h3>
              <p className="text-base text-gray-300 mb-5">
                Speak with our real estate specialists
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2182BF] transition-colors text-base"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2182BF] transition-colors text-base"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#2182BF] transition-colors text-base"
                  />
                </div>

                <div>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#2182BF] transition-colors text-base"
                  >
                    <option value="">Interested In</option>
                    <option value="villa">Luxury Villas</option>
                    <option value="apartment">Apartments</option>
                    <option value="commercial">Commercial</option>
                    <option value="investment">Investment</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                </button>
              </form>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-4 p-3 rounded text-center text-sm ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? 'Thank you! We will contact you soon.' 
                      : 'Error sending message. Please try again.'}
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-sm text-gray-400 text-center mt-4">
                By submitting, you agree to our privacy policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Form Overlay - Full Page */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            variants={mobileFormVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Form Container - Full Screen on Mobile */}
            <div className="absolute inset-0 bg-white">
              {/* Header with Close Button */}
              <div className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] p-4 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">Get Expert Advice</h3>
                    <p className="text-sm opacity-90">Speak with our real estate specialists</p>
                  </div>
                  <button
                    onClick={() => setShowForm(false)}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span className="text-white text-xl font-bold">×</span>
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#2182BF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#2182BF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#2182BF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-[#2182BF] transition-colors"
                    >
                      <option value="">Select your interest</option>
                      <option value="villa">Luxury Villas</option>
                      <option value="apartment">Apartments</option>
                      <option value="commercial">Commercial</option>
                      <option value="investment">Investment</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg mt-4"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                  </button>
                </form>

                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mt-4 p-4 rounded-lg text-center ${
                        submitStatus === 'success' 
                          ? 'bg-green-100 text-green-700 border border-green-300' 
                          : 'bg-red-100 text-red-700 border border-red-300'
                      }`}
                    >
                      {submitStatus === 'success' 
                        ? 'Thank you! We will contact you soon.' 
                        : 'Error sending message. Please try again.'}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-xs text-gray-500 text-center mt-6">
                  By submitting, you agree to our privacy policy and terms of service
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;