import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutHeroSection = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [properties, setProperties] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    const animateCount = (setter, max, speed) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count >= max) clearInterval(interval);
      }, speed);
    };

    animateCount(setExperience, 11, 100);
    animateCount(setClients, 500, 10);
    animateCount(setSatisfaction, 98, 20);
    animateCount(setProperties, 1000, 5);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text */}
          <div
            className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6"
            data-aos="fade-right"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 border border-gray-200 shadow-sm rounded-lg">
              <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700 tracking-wide">ABOUT ARDY REAL ESTATE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center lg:text-left leading-tight">
              Premier Real Estate Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Dubai & UAE</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left">
              ARDY Real Estate is the Dubai-based extension of the Majestic Group, bringing over a decade of expertise in real estate and investment to the UAE's dynamic property market.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left">
              As authorized partners of <strong className="text-[#2182BF]">Danube Properties</strong> and <strong className="text-[#BF364F]">BNW Realty</strong>, we offer exclusive access to pre-launch opportunities, flexible payment plans, and fully furnished luxury residences.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1c6fa3] hover:to-[#a82c41] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-4"
            >
              Get Free Consultation <IoMdAddCircle className="ml-2 text-xl" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 relative group" data-aos="fade-left" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Dubai Luxury Properties"
              className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Images */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 order-2 lg:order-1" data-aos="fade-up">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                alt="Marina Views"
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                <span className="text-xs font-semibold text-gray-700">Marina Views</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Modern Design"
                className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-sm">
                <span className="text-xs font-semibold text-gray-700">Modern Design</span>
              </div>
            </div>
          </div>

          {/* Text & Counters */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-6 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 border border-gray-200 shadow-sm rounded-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-gray-700 tracking-wide">OUR ACHIEVEMENTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                Trusted by Investors Across{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">India & UAE</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left max-w-xl">
                With a proven track record in Dubai's competitive real estate market, ARDY Real Estate has become the preferred choice for investors seeking premium properties, exceptional returns, and unparalleled service excellence.
              </p>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
              {[{ val: experience, label: 'Years of Real Estate Excellence' },
                { val: clients, label: 'Satisfied Clients & Investors' },
                { val: satisfaction, label: 'Client Satisfaction Rate' },
                { val: properties, label: 'Premium Properties Handled' }].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start p-4 bg-gray-50 rounded-xl" data-aos="zoom-in" data-aos-delay={idx*150}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{item.val}{item.label.includes('Rate') ? '%' : '+'}</h3>
                  <h6 className="text-xs sm:text-sm text-gray-600 font-medium mt-2 text-center lg:text-left">{item.label}</h6>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1c6fa3] hover:to-[#a82c41] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-lg w-full sm:w-auto justify-center mt-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Start Your Investment Journey <IoMdAddCircle className="ml-2 text-xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeroSection;
