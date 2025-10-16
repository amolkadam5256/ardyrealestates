import React from "react";
import WhyChooseUs from "../../components/AboutSection/WhyChooseUs";
import { Link } from "react-router-dom";
import ServicesGrid from "../../components/ServicesSection/ServicesGrid";
import InvestmentCTA from "../../components/HomeSection/InvestmentCTA";

const LeasingServices = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white py-24 px-6">
        <div className="bg-gradient-to-br from-[#2182BF]/80 to-[#BF364F]/80 absolute inset-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Leasing Services
          </h1>
          <p className="text-xl mb-6">Optimal Rental Returns. Qualified Tenants. Peace of Mind.</p>
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
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Leasing Services</span>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprehensive tenant sourcing and lease management for optimal rental returns. 
              We handle everything from tenant screening to lease documentation, ensuring 
              your property is occupied by reliable tenants with maximum rental income.
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
                to="/services/buying-selling" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Buying & Selling
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
              alt="Leasing services and tenant management"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Leasing Services Include</h2>
          <p className="text-gray-600">
            End-to-end leasing solutions for maximum occupancy and optimal rental income.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "👥 Tenant Screening",
              text: "Comprehensive background checks and credit verification for reliable tenants.",
            },
            {
              title: "📄 Lease Documentation",
              text: "Professional lease agreement preparation and legal compliance assurance.",
            },
            {
              title: "💰 Rental Optimization",
              text: "Market analysis to set competitive rental prices for maximum returns.",
            },
            {
              title: "🏠 Property Showings",
              text: "Professional property viewings and tenant qualification management.",
            },
            {
              title: "⚖️ Legal Compliance",
              text: "Ensuring all leasing activities comply with Dubai rental regulations.",
            },
            {
              title: "📊 Tenant Relations",
              text: "Professional communication and relationship management with tenants.",
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

export default LeasingServices;