import React from "react";
import { FaUser, FaUserTie, FaHandshake, FaCheckCircle } from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    {
      icon: <FaUser className="text-2xl" />,
      step: "01",
      title: "Client Approach",
      description: "You reach out for a free consultation about your property needs"
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      step: "02",
      title: "Assigning an Agent",
      description: "We match you with a specialized agent based on your requirements"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      step: "03",
      title: "Showings & Negotiations",
      description: "Property viewings and expert negotiation for the best terms"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      step: "04",
      title: "Closing the Transaction",
      description: "Smooth completion of all legal and financial formalities"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Simple Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't be busy – be productive! Here is our simple, proven process that has delivered success to hundreds of clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-105 border border-gray-100">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-500">
                  {step.icon}
                </div>
                
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;