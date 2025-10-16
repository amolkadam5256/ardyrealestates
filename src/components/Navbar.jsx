import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronDown, FaChevronUp, FaPhone, FaTimes } from "react-icons/fa";
import Images from "../assets/images/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Team", path: "/our-team" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Off Plan Property Management", path: "/services/off-plan-property-management" },
        { name: "Property Management", path: "/services/property-management" },
        { name: "Buying & Selling", path: "/services/buying-selling" },
        { name: "Leasing Services", path: "/services/leasing" },
        { name: "Project Sales & Marketing", path: "/services/project-sales-marketing" },
        { name: "Product Design", path: "/services/product-design" },
      ],
    },
    { name: "Why to invest in Dubai", path: "/invest-dubai" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/yourbrand", color: "#1877F2" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/yourbrand", color: "#1DA1F2" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/yourbrand", color: "#E1306C" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/yourbrand", color: "#0077B5" },
  ];

  return (
    <nav ref={navbarRef} className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/99 shadow-lg" : "bg-white/90"}`}>
      <div className="w-full flex items-center justify-between px-4 py-0 md:px-4 md:py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.img 
            src={Images.FullLogo} 
            alt="Ardy Real Estate" 
            className="h-16 md:h-16 transition-all duration-300" 
          />
        </Link>

        {/* Hamburger */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          className="inline-flex items-center p-2 w-full h-10 justify-end text-gray-800 rounded-lg md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </motion.button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {!item.dropdown ? (
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `relative px-2 py-0 transition-all duration-300 ${isActive ? "text-[#BF364F] font-semibold" : "text-gray-800 hover:text-[#2182BF]"}`}
                >
                  {item.name}
                </NavLink>
              ) : (
                <div 
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link 
                    to={item.path} 
                    className={`flex items-center px-2 py-1 transition-all ${location.pathname.includes("services") ? "text-[#BF364F] font-semibold" : "text-gray-800 hover:text-[#2182BF]"}`}
                  >
                    {item.name}
                    <motion.span 
                      animate={{ rotate: isServicesOpen ? 180 : 0 }} 
                      className="ml-1"
                    >
                      {isServicesOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                    </motion.span>
                  </Link>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.ul 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -10 }} 
                        className="absolute left-0 top-full mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-50 border border-gray-200"
                      >
                        {item.dropdown.map((drop, idx) => (
                          <li key={idx}>
                            <NavLink 
                              to={drop.path} 
                              className="block py-3 px-4 text-gray-700 hover:bg-[#2182BF] hover:text-white transition-all duration-300 border-b border-gray-100 last:border-b-0"
                            >
                              {drop.name}
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Contact */}
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="tel:+971505761914" 
            className="hidden lg:flex items-center bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative font-semibold"
          >
            <FaPhone className="mr-3 text-lg" />
            +971 50 576 1914
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: '100%' }} 
              transition={{ type: "spring", stiffness: 300, damping: 30 }} 
              className="fixed inset-0 bg-white z-50 pt-4 px-6 pb-5 md:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src={Images.FullLogo} alt="Ardy Real Estate" className="h-12" />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2  bg-gray-100 hover:bg-gray-200 transition"
                >
                  <FaTimes className="text-gray-700" />
                </button>
              </div>
              
              <motion.ul 
                className="space-y-1 mt-6"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-b-0">
                    {!item.dropdown ? (
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => 
                          `block py-4 px-2 text-lg font-medium transition-all duration-300 ${
                            isActive ? "text-[#BF364F] bg-red-50" : "text-gray-800 hover:text-[#2182BF] hover:bg-blue-50"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ) : (
                      <div className="py-4">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center justify-between w-full text-lg font-medium px-2 ${
                            location.pathname.includes("services") ? "text-[#BF364F]" : "text-gray-800"
                          }`}
                        >
                          {item.name}
                          {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.dropdown.map((drop, idx) => (
                                <li key={idx}>
                                  <NavLink
                                    to={drop.path}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setIsServicesOpen(false);
                                    }}
                                    className="block py-3 px-2 text-gray-700 hover:text-[#2182BF] hover:bg-blue-50 rounded-lg transition-all duration-300"
                                  >
                                    {drop.name}
                                  </NavLink>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                ))}
              </motion.ul>

              {/* Mobile Contact */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a 
                  href="tel:+971505761914" 
                  className="flex items-center justify-center bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white px-6 py-4 rounded-lg shadow-lg font-semibold text-lg"
                >
                  <FaPhone className="mr-3 text-lg" />
                  +971 50 576 1914
                </a>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;