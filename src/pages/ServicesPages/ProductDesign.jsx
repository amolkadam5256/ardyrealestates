import React from "react";
import WhyChooseUs from "../../components/AboutSection/WhyChooseUs";
import { Link } from "react-router-dom";
import ServicesGrid from "../../components/ServicesSection/ServicesGrid";
import InvestmentCTA from "../../components/HomeSection/InvestmentCTA";

const ProductDesign = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center text-white py-24 px-6">
        <div className="bg-gradient-to-br from-[#2182BF]/80 to-[#BF364F]/80 absolute inset-0"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Design
          </h1>
          <p className="text-xl mb-6">Innovative Spaces. Functional Design. Maximum Value.</p>
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
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Product Design</span> Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Transform your property vision into reality with our comprehensive product design services. 
              From conceptualization to execution, we create functional, aesthetic, and value-driven spaces 
              that maximize both livability and investment returns.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services/project-sales-marketing" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Project Sales & Marketing
              </Link>
              <Link 
                to="/services/property-management" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Property Management
              </Link>
              <Link 
                to="/services/off-plan-property-management" 
                className="text-[#2182BF] hover:text-[#1a6ba3] font-semibold transition-colors duration-300"
              >
                → Off-Plan Management
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Product design and interior planning"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Product Design Services</h2>
          <p className="text-gray-600">
            Creative design solutions that enhance property value and optimize space utilization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "🎨 Space Planning",
              text: "Optimized layout designs for maximum functionality and aesthetic appeal.",
            },
            {
              title: "🏠 Interior Design",
              text: "Comprehensive interior design concepts that reflect modern living trends.",
            },
            {
              title: "📐 Architectural Consultation",
              text: "Expert advice on structural modifications and space optimization.",
            },
            {
              title: "🛋️ Furniture Layout",
              text: "Strategic furniture placement for optimal space utilization and flow.",
            },
            {
              title: "🎯 Value Enhancement",
              text: "Design strategies that significantly increase property market value.",
            },
            {
              title: "📊 3D Visualization",
              text: "Realistic 3D renderings to visualize the final design outcome.",
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

export default ProductDesign;