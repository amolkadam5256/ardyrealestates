import React from "react";
import { FaHome, FaChartLine, FaHandshake, FaCogs, FaSearch, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesGrid = () => {
  const services = [
    {
      icon: <FaHome className="text-2xl" />,
      title: "Project Sales & Marketing",
      description: "Exclusive partnerships with leading developers like Danube Properties and BNW Realty for pre-launch opportunities",
      features: ["Pre-launch Access", "Flexible Payment Plans", "Marketing Strategy", "Developer Relations"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      path: "/services/project-sales-marketing"
    },
    {
      icon: <FaKey className="text-2xl" />,
      title: "Leasing Services",
      description: "Comprehensive tenant sourcing and lease management for optimal rental returns",
      features: ["Tenant Screening", "Lease Documentation", "Rental Optimization", "Property Showings"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/services/leasing"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Off-Plan Property Management",
      description: "End-to-end management for off-plan investments from booking to handover",
      features: ["Payment Tracking", "Progress Monitoring", "Handover Coordination", "Document Management"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80",
      path: "/services/off-plan-property-management"
    },
    {
      icon: <FaCogs className="text-2xl" />,
      title: "Property Management",
      description: "Hands-on operations and maintenance oversight for your investment properties",
      features: ["Maintenance Management", "Tenant Relations", "Financial Reporting", "Emergency Support"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80",
      path: "/services/property-management"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Buying & Selling Services",
      description: "Expert negotiation and contract support to close deals faster with optimal pricing",
      features: ["Market Analysis", "Price Optimization", "Negotiation", "Contract Completion"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      path: "/services/buying-selling"
    },
    {
      icon: <FaSearch className="text-2xl" />,
      title: "Investment Consultation",
      description: "Data-driven investment advice and market insights for strategic property decisions",
      features: ["ROI Analysis", "Market Research", "Portfolio Strategy", "Risk Assessment"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80",
      path: "/services/investment-consultation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With our wide selection of property services catered to your specific needs, let us relieve the burden and increase the value of your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100 hover:border-[#2182BF]/30"
            >
              {/* Image Background with Overlay */}
              <div 
                className="relative h-56 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2182BF]/80 to-[#BF364F]/80"></div>
                
                {/* Content Container with Better Spacing */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 border border-white/30 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white leading-tight mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1 overflow-hidden">
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button with Link */}
                <Link 
                  to={service.path}
                  className="block w-full bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1a6ba3] hover:to-[#a82b41] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;