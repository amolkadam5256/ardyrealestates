import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Aqua Maya, Al Marjan Island",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    stars: 5,
    feedback: "Investing in Aqua Maya was the best decision I made. The waterfront location and premium amenities exceeded all my expectations. ARDY made the entire process seamless.",
    location: "Dubai"
  },
  {
    name: "Priya Sharma",
    company: "Aspirez By Danube, Dubai Sports City",
    date: "Feb 2024",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    stars: 5,
    feedback: "The flexible payment plan and prime location in Dubai Sports City made Aspirez the perfect investment. The team at ARDY provided exceptional guidance throughout.",
    location: "Mumbai"
  },
  {
    name: "Ahmed Al Mansoori",
    company: "Bayview Residences, Dubai Marina",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stars: 4.5,
    feedback: "As a local investor, I appreciate ARDY's deep understanding of Dubai's real estate market. Their portfolio of premium properties is truly impressive.",
    location: "Dubai"
  },
  {
    name: "Anjali Patel",
    company: "Ocean Pearl, Jumeirah Beach Residence",
    date: "April 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    stars: 5,
    feedback: "Moving from India to Dubai was made easy by ARDY Real Estate. They found us the perfect beachfront apartment that matched all our requirements and budget.",
    location: "Delhi"
  },
  {
    name: "Mohammed Khan",
    company: "Sky Gardens, Business Bay",
    date: "May 2024",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    stars: 5,
    feedback: "The investment potential in Business Bay is incredible. ARDY's market insights helped me secure a prime property that has already appreciated significantly.",
    location: "Dubai"
  },
  {
    name: "Deepak Verma",
    company: "Palm Residences, Palm Jumeirah",
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&h=150&fit=crop&crop=face",
    stars: 5,
    feedback: "Owning a villa on Palm Jumeirah was always my dream. ARDY made it possible with their expert negotiation skills and comprehensive support services.",
    location: "Bangalore"
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex mt-2 gap-1 text-[#F2B90C]">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="50%" stopColor="#F2B90C" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z"
          />
        </svg>
      )}
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 max-w-7xl mx-auto px-6 py-20" data-aos="fade-up" data-aos-duration="3000">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-center lg:text-left" data-aos="fade-up" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 mb-4 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">CLIENT SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            500+ Happy Clients From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">
              India & Dubai
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
            Discover why investors from across India and UAE trust ARDY Real Estate for their premium property investments in Dubai's most sought-after locations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-[#2182BF]">500+</div>
              <div className="text-gray-600 text-sm font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-[#BF364F]">98%</div>
              <div className="text-gray-600 text-sm font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-[#2182BF]">AED 2.5B</div>
              <div className="text-gray-600 text-sm font-medium">Portfolio Value</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start mt-10 gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-[#2182BF] rounded-lg flex items-center justify-center hover:bg-[#2182BF] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 text-[#2182BF] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"></path>
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 border-2 border-[#BF364F] rounded-lg flex items-center justify-center hover:bg-[#BF364F] transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-6 h-6 text-[#BF364F] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full lg:w-3/5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="swiperText"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2182BF]/20 group">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      className="rounded-full object-cover w-16 h-16 border-4 border-white shadow-md group-hover:border-[#2182BF]/20 transition-all duration-300"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.location === 'Dubai' 
                            ? 'bg-blue-100 text-[#2182BF]' 
                            : 'bg-orange-100 text-[#BF364F]'
                        }`}>
                          {item.location}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-600 mt-1">{item.company}</p>
                      <p className="text-xs text-gray-500 italic">{item.date}</p>
                    </div>
                  </div>
                  
                  {renderStars(item.stars)}
                  
                  <p className="mt-4 text-gray-700 leading-relaxed italic relative pl-4 border-l-2 border-[#2182BF]">
                    "{item.feedback}"
                  </p>
                  
                  {/* Flag indicator */}
                  <div className="absolute top-1 right-4">
                    {item.location === 'Dubai' ? (
                      <span className="text-xs bg-[#2182BF] text-white px-2 py-1 rounded">🇦🇪 UAE</span>
                    ) : (
                      <span className="text-xs bg-[#BF364F] text-white px-2 py-1 rounded">🇮🇳 India</span>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;