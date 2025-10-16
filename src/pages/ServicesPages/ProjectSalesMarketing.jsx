import React from "react";
import WhyChooseUs from "../../components/AboutSection/WhyChooseUs";
import { Link } from "react-router-dom";
import ServicesGrid from "../../components/ServicesSection/ServicesGrid";
import InvestmentCTA from "../../components/HomeSection/InvestmentCTA";

const ProjectSalesMarketing = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white py-24 px-6">
        <div className="bg-gradient-to-br from-[#2182BF]/80 to-[#BF364F]/80 absolute inset-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Project Sales & Marketing
          </h1>
          <p className="text-xl mb-6">Exclusive Partnerships. Pre-Launch Opportunities. Maximum Exposure.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#2182BF] to-[#BF364F] hover:from-[#1a6ba3] hover:to-[#a82b41] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Project Sales & Marketing</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Exclusive partnerships with leading developers like Danube Properties and BNW Realty for pre-launch opportunities. 
              We provide comprehensive marketing strategies and sales solutions to maximize project visibility and investor returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services/off-plan-property-management" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Off-Plan Management
              </Link>
              <Link 
                to="/services/property-management" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Property Management
              </Link>
              <Link 
                to="/services/product-design" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Product Design
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt="Project sales and marketing"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Project Sales & Marketing Services</h2>
          <p className="text-gray-600">
            Comprehensive marketing strategies and sales solutions for maximum project success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "🚀 Pre-launch Access",
              text: "Exclusive early access to premium projects before public release.",
            },
            {
              title: "💳 Flexible Payment Plans",
              text: "Customized payment solutions tailored to investor needs.",
            },
            {
              title: "📈 Marketing Strategy",
              text: "Comprehensive digital and traditional marketing campaigns.",
            },
            {
              title: "🤝 Developer Relations",
              text: "Strong partnerships with leading Dubai developers.",
            },
            {
              title: "🎯 Targeted Campaigns",
              text: "Focused marketing to reach qualified investors globally.",
            },
            {
              title: "📊 Sales Analytics",
              text: "Data-driven insights to optimize sales performance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#2182BF]/30 group"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.text}</p>
              <Link 
                to="/contact" 
                className="text-[#2182BF] hover:text-[#BF364F] font-semibold text-sm transition-colors duration-300 inline-block"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        
      </section>

      <ServicesGrid/>
      
      <WhyChooseUs />

      {/* CTA Section with Links */}
      <InvestmentCTA />
    </div>
  );
};

export default ProjectSalesMarketing;