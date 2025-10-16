import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Members = [
  {
    name: "Aarav Mehta",
    role: "Sales Manager",
    desc: "Oversees property sales operations and ensures smooth client onboarding. Skilled in negotiation, client management, and real estate deal closures across Dubai and Sharjah.",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328f6a3b?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
  {
    name: "Sara Al Farsi",
    role: "Marketing Manager",
    desc: "Develops and manages marketing campaigns for luxury and off-plan properties. Focuses on digital strategy, content creation, and lead generation for premium listings.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
  {
    name: "Rohit Kapoor",
    role: "Property Consultant",
    desc: "Advises clients on residential and commercial investments. Provides detailed market analysis and assists with selecting profitable real estate opportunities.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
  {
    name: "Layla Hassan",
    role: "Leasing Manager",
    desc: "Manages property leasing operations, tenant relations, and rental agreements. Ensures occupancy targets and high satisfaction rates for all leased units.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
  {
    name: "Karan Singh",
    role: "Operations Manager",
    desc: "Coordinates internal teams, project schedules, and daily operations. Ensures seamless collaboration between sales, marketing, and customer service departments.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
  {
    name: "Fatima Rahman",
    role: "Client Relations Manager",
    desc: "Maintains client relationships and ensures an excellent experience from inquiry to deal closure. Expert in personalized property solutions for domestic and NRI clients.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
  {
    name: "Omar Khan",
    role: "Finance & Compliance Manager",
    desc: "Manages financial planning, documentation, and compliance for real estate transactions. Ensures transparency and adherence to UAE property laws.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face",
    animation: "fade-up",
  },
];

const TeamMembers = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 900, easing: "ease-in-out" });
  }, []);

  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 mb-6 border border-gray-200 shadow-sm rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">MEET OUR TEAM</span>
          </div>
          
          <h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            data-aos="fade-down"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">ARDY Experts</span>
          </h2>
          <p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Meet the dedicated professionals behind ARDY Real Estate - your trusted partners for premium property investments in Dubai and UAE.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              data-aos={member.animation}
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Role Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                    {member.role.split('–')[0].trim()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2182BF] group-hover:to-[#BF364F] transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#2182BF] uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.desc}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-[#2182BF] group-hover:to-[#BF364F] rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default TeamMembers;