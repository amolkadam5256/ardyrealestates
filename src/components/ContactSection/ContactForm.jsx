import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    budget: "",
    propertyType: "",
    location: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "244b265f-24ee-4f12-b4bd-5646738facb7", // Replace with your actual key
          subject: "New Property Inquiry - ARDY Real Estate",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          budget: formData.budget,
          propertyType: formData.propertyType,
          location: formData.location,
          timeline: formData.timeline,
          message: formData.message,
          from_name: "ARDY Real Estate Website"
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          budget: "",
          propertyType: "",
          location: "",
          timeline: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetRanges = [
    "Under AED 1M",
    "AED 1M - 2M", 
    "AED 2M - 5M",
    "AED 5M - 10M",
    "AED 10M - 20M",
    "AED 20M+"
  ];

  const propertyTypes = [
    "Apartment",
    "Villa", 
    "Townhouse",
    "Penthouse",
    "Commercial",
    "Land",
    "Hotel Apartment"
  ];

  const locations = [
    "Palm Jumeirah",
    "Downtown Dubai",
    "Dubai Marina",
    "Business Bay", 
    "Jumeirah Beach Residence",
    "Dubai Hills",
    "Al Marjan Island",
    "Other Areas"
  ];

  const timelines = [
    "Immediately",
    "Within 1 month", 
    "1-3 months",
    "3-6 months", 
    "6+ months",
    "Just exploring"
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Creative Header Section */}
      {/* Enhanced Contact Form */}
      <div className="bg-white shadow-2xl border border-gray-100">
        {/* Form Header Bar */}
        <div className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-xl">Property Inquiry Form</h3>
                <p className="text-white/80 text-sm sm:text-xs">Complete this form for personalized property matches</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Expert Available Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mx-8 mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 sm:mx-4 sm:p-4">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-12 h-12 bg-green-500 flex items-center justify-center sm:w-10 sm:h-10">
                <svg className="w-6 h-6 text-white sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-1 sm:text-base">Inquiry Submitted Successfully!</h4>
                <p className="text-green-700 sm:text-sm">Our property expert will contact you within 24 hours with personalized recommendations tailored to your preferences.</p>
              </div>
            </div>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="mx-8 mt-6 p-6 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 sm:mx-4 sm:p-4">
            <div className="flex items-center gap-4 sm:gap-3">
              <div className="w-12 h-12 bg-red-500 flex items-center justify-center sm:w-10 sm:h-10">
                <svg className="w-6 h-6 text-white sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-800 mb-1 sm:text-base">Submission Error</h4>
                <p className="text-red-700 sm:text-sm">There was an error submitting your inquiry. Please try again or contact us directly at +971 50 576 1914.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 space-y-8 sm:p-4 sm:space-y-6">
          {/* Personal Information Section */}
          <div className="space-y-6 sm:space-y-4">
            <div className="flex items-center gap-3 mb-6 sm:mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2182BF] to-[#BF364F] flex items-center justify-center sm:w-6 sm:h-6">
                <span className="text-white font-bold text-sm sm:text-xs">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 sm:text-lg">Personal Information</h4>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#2182BF] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 border-2 transition-all duration-300 bg-white placeholder-gray-400 outline-none sm:px-3 sm:py-3 sm:text-sm ${
                    focusedField === 'name' 
                      ? 'border-[#2182BF] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#2182BF] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 border-2 transition-all duration-300 bg-white placeholder-gray-400 outline-none sm:px-3 sm:py-3 sm:text-sm ${
                    focusedField === 'email' 
                      ? 'border-[#2182BF] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#2182BF] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-4 border-2 transition-all duration-300 bg-white placeholder-gray-400 outline-none sm:px-3 sm:py-3 sm:text-sm ${
                    focusedField === 'phone' 
                      ? 'border-[#2182BF] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="+971 XX XXX XXXX"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#2182BF] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('country')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-4 border-2 transition-all duration-300 bg-white placeholder-gray-400 outline-none sm:px-3 sm:py-3 sm:text-sm ${
                    focusedField === 'country' 
                      ? 'border-[#2182BF] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  placeholder="Where are you based?"
                />
              </div>
            </div>
          </div>

          {/* Property Preferences Section */}
          <div className="space-y-6 sm:space-y-4">
            <div className="flex items-center gap-3 mb-6 sm:mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2182BF] to-[#BF364F] flex items-center justify-center sm:w-6 sm:h-6">
                <span className="text-white font-bold text-sm sm:text-xs">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 sm:text-lg">Property Preferences</h4>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#BF364F] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 hover:border-gray-300 focus:border-[#BF364F] focus:shadow-lg bg-white outline-none transition-all duration-300 appearance-none sm:px-3 sm:py-3 sm:text-sm"
                >
                  <option value="">Select your investment budget</option>
                  {budgetRanges.map((range, index) => (
                    <option key={index} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#BF364F] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Property Type *
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 hover:border-gray-300 focus:border-[#BF364F] focus:shadow-lg bg-white outline-none transition-all duration-300 appearance-none sm:px-3 sm:py-3 sm:text-sm"
                >
                  <option value="">Choose property type</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#BF364F] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Preferred Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 hover:border-gray-300 focus:border-[#BF364F] focus:shadow-lg bg-white outline-none transition-all duration-300 appearance-none sm:px-3 sm:py-3 sm:text-sm"
                >
                  <option value="">Select preferred area</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                  <svg className="w-4 h-4 text-[#BF364F] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Purchase Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 hover:border-gray-300 focus:border-[#BF364F] focus:shadow-lg bg-white outline-none transition-all duration-300 appearance-none sm:px-3 sm:py-3 sm:text-sm"
                >
                  <option value="">When are you planning to buy?</option>
                  {timelines.map((timeline, index) => (
                    <option key={index} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="space-y-4 sm:space-y-3">
            <div className="flex items-center gap-3 mb-4 sm:mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2182BF] to-[#BF364F] flex items-center justify-center sm:w-6 sm:h-6">
                <span className="text-white font-bold text-sm sm:text-xs">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 sm:text-lg">Specific Requirements</h4>
            </div>
            
            <div className="space-y-2">
              <label className="block text-gray-700 text-sm font-semibold mb-3 flex items-center gap-2 sm:text-xs">
                <svg className="w-4 h-4 text-[#2182BF] sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Additional Details & Preferences
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows="5"
                className={`w-full px-4 py-4 border-2 transition-all duration-300 bg-white placeholder-gray-400 outline-none resize-none sm:px-3 sm:py-3 sm:text-sm ${
                  focusedField === 'message' 
                    ? 'border-[#2182BF] shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Tell us about your specific requirements: number of bedrooms, preferred amenities, lifestyle preferences, investment goals, must-have features, etc. The more details you provide, the better we can match you with perfect properties."
              />
            </div>
          </div>

          {/* Enhanced Submit Section */}
          <div className="pt-8 border-t border-gray-200 sm:pt-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-4">
              <div className="flex-1">
                <h5 className="text-lg font-semibold text-gray-900 mb-2 sm:text-base">Ready to Find Your Dream Property?</h5>
                <p className="text-gray-600 text-sm sm:text-xs">
                  Submit your inquiry and our dedicated property expert will personally curate a selection of properties matching your exact criteria.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1a6ba3] hover:to-[#a82b41] text-white px-12 py-4 font-bold text-lg transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[280px] sm:px-6 sm:py-3 sm:text-base sm:min-w-[240px]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 sm:gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="w-6 h-6 animate-spin sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Processing Your Inquiry...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Get Personalized Matches
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>

            {/* Enhanced Privacy Note */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 sm:mt-4 sm:p-3">
              <div className="flex items-start gap-3 sm:gap-2">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-gray-600 text-sm sm:text-xs">
                    <strong>Your privacy is our priority.</strong> By submitting this form, you agree to our privacy policy. 
                    We respect your confidentiality and will never share your information with third parties. 
                    Our team will contact you directly to discuss your property requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;