import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const HeroSectionDubai = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Images with Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out opacity-100" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2182BF]/90 via-[#2182BF]/70 to-[#BF364F]/90"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-white/20 transition-all duration-1000 hover:bg-white/10 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 mb-6 border border-white/30 ">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-[#2182BF] rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-[#BF364F] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <span className="text-xs font-bold tracking-widest text-white uppercase">
                Elite Dubai Investments
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
              Dubai{" "}
              <span className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] bg-clip-text text-transparent">
                Awaits You
              </span>
            </h1>
            
            {/* Description */}
            <div className="border border-white/20 p-6 mb-8 max-w-2xl mx-auto ">
              <p className="text-white/90 text-base leading-relaxed">
                Your gateway to <span className="font-semibold text-white">tax-free wealth</span> and 
                premium real estate opportunities in the world's most dynamic market. Experience luxury living with unprecedented returns.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1a6ba3] hover:to-[#a82b41] text-white px-8 py-4 font-bold text-base transition-all duration-300 hover:shadow-2xl border border-white/20  min-w-[180px] group text-center"
            >
              <span className="flex items-center gap-2 justify-center">
                <span>Explore Properties</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white/40 hover:border-white text-white hover:bg-white/10 px-8 py-4 font-bold text-base transition-all duration-300  min-w-[180px] group text-center"
            >
              <span className="flex items-center gap-2 justify-center">
                <svg 
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span>Schedule Call</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 bg-white/60 mt-1 animate-bounce rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionDubai;