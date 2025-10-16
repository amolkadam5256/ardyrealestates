import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1540959733332-8ab48a8709f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-20 lg:py-20 overflow-hidden">
      {/* Background Images with Enhanced Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out transform ${
            index === currentImage 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url('${image}')`
          }}
        />
      ))}

      {/* Gradient Overlay with Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2182BF]/60 via-[#2182BF]/40 to-[#BF364F]/60"></div>

      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              background: `linear-gradient(45deg, #2182BF, #BF364F)`,
              animation: `float ${Math.random() * 8 + 6}s infinite ease-in-out ${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-3 mb-8 rounded-full border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300 group cursor-pointer">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#2182BF] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#BF364F] rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
            </div>
            <span className="text-sm font-bold tracking-wider text-white">
              PREMIUM REAL ESTATE SERVICES
            </span>
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Exceptional <span className="text-[#BF364F]">Property Solutions</span> in Dubai
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Transform your real estate vision into extraordinary returns with our comprehensive 
            <span className="font-semibold text-white"> premium property services</span> tailored for Dubai's dynamic market
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1a6ba3] hover:to-[#a82b41] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#BF364F] to-[#2182BF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            <button className="group relative bg-transparent border-2 border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:bg-white/10">
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-12 flex items-center justify-center gap-4 text-white/70">
            <div className="w-2 h-2 bg-[#2182BF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Trusted by 500+ Investors</span>
            <div className="w-2 h-2 bg-[#BF364F] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;