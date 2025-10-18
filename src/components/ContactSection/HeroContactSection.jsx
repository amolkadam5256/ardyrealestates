import React, { useState, useEffect } from "react";

const HeroContactSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const dubaiImages = [
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1540252586843-98854e0b9aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1538688276812-2f65b4c27aaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % dubaiImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mb-16 relative overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {dubaiImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2182BF]/60 via-[#2182BF]/40 to-[#BF364F]/60"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 animate-float"
              style={{
                width: Math.random() * 60 + 20 + 'px',
                height: Math.random() * 60 + 20 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                background: `linear-gradient(45deg, #2182BF, #BF364F)`,
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content - No Changes */}
      <div className="relative z-10 py-20 px-8">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-8 py-4 mb-6 shadow-lg">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{animationDelay: '600ms'}}></div>
          </div>
          <span className="text-sm font-bold tracking-widest uppercase">EXCLUSIVE PROPERTY MATCHING SERVICE</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Discover Your Perfect 
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mt-2">
            Dubai Property
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let our expert team handpick properties that match your exact requirements. 
            From luxury apartments to premium villas, we'll find your ideal investment in Dubai's most sought-after locations.
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center gap-8 py-6 border-y border-white/10  rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15K+</div>
              <div className="text-sm text-white/80">Properties</div>
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-white to-blue-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-white to-blue-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroContactSection;