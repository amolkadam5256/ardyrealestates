import React from "react";

const InvestmentCTA = () => {
  return (
    <div className="text-center mt-16 relative overflow-hidden" data-aos="fade-up">
      <div className="relative p-6 lg:p-10 text-white shadow-2xl overflow-hidden">
        {/* Background Dubai Images with Overlay - Fixed */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Dubai Skyline"
            className="w-full h-full object-cover fixed"
            style={{ position: 'fixed' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2182BF]/50 to-[#BF364F]/50" style={{ position: 'fixed' }}></div>
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
  );
};

export default InvestmentCTA;