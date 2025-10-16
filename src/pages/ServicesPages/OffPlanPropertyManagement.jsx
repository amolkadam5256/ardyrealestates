import React from "react";
import WhyChooseUs from "../../components/AboutSection/WhyChooseUs";
import { Link } from "react-router-dom";
import ServicesGrid from "../../components/ServicesSection/ServicesGrid";
import InvestmentCTA from "../../components/HomeSection/InvestmentCTA";

const OffPlanPropertyManagement = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white py-24 px-6">
        <div className="bg-gradient-to-br from-[#2182BF]/80 to-[#BF364F]/80 absolute inset-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Off-Plan Property Management
          </h1>
          <p className="text-xl mb-6">Invest Smart. Manage Smarter.</p>
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
              What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Off-Plan Property Management</span>?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Off-plan property management means managing properties that are
              still under construction or in the pre-launch stage. From tracking
              development progress to coordinating handover and rental setup, we
              handle every step of your real estate journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services/property-management" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Property Management
              </Link>
              <Link 
                to="/services/buying-selling" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Buying & Selling
              </Link>
              <Link 
                to="/services/leasing" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Leasing Services
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Off-plan property"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Services Include</h2>
          <p className="text-gray-600">
            Comprehensive, transparent, and tailored to your investment goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "📋 Project Tracking",
              text: "Stay informed with real-time construction updates and timelines.",
            },
            {
              title: "🏗️ Developer Coordination",
              text: "We liaise directly with developers to ensure smooth communication and documentation.",
            },
            {
              title: "🔍 Handover Management",
              text: "We inspect, report, and resolve all issues before property delivery.",
            },
            {
              title: "🏠 Leasing & Tenant Setup",
              text: "Once ready, we help you rent your property quickly and efficiently.",
            },
            {
              title: "💰 Financial Reporting",
              text: "Transparent reports on ROI, expenses, and growth projections.",
            },
            {
              title: "💡 Investment Guidance",
              text: "Expert insights to maximize your real estate returns.",
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

          <ServicesGrid/>
          
      </section>

      <WhyChooseUs />

      {/* CTA Section with Links */}
      <InvestmentCTA />
    </div>
  );
};

export default OffPlanPropertyManagement;