import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaYoutube,
  FaWhatsapp,
  FaExclamationCircle,
  FaArrowRight,
  FaHome,
  FaBuilding,
  FaChartLine,
  FaAward
} from "react-icons/fa";
import { motion } from "framer-motion";
import Images from "../assets/images/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primaryColor = "#2182BF";
  const secondaryColor = "#BF364F";
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [message, setMessage] = useState("");

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/", icon: <FaHome className="text-xs" /> },
        { name: "About", path: "/about", icon: <FaBuilding className="text-xs" /> },
        { name: "Team", path: "/team", icon: <FaAward className="text-xs" /> },
        { name: "Why Invest in Dubai", path: "/invest-dubai", icon: <FaChartLine className="text-xs" /> },
        { name: "Contact", path: "/contact", icon: <FaEnvelope className="text-xs" /> }
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Off Plan Property", path: "/services/off-plan-property-management" },
        { name: "Property Management", path: "/services/property-management" },
        { name: "Buying & Selling", path: "/services/buying-selling" },
        { name: "Leasing Services", path: "/services/leasing" },
        { name: "Project Sales", path: "/services/project-sales-marketing" },
        { name: "Product Design", path: "/services/product-design" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", color: "#1877F2", name: "Facebook" },
    { icon: <FaTwitter />, url: "#", color: "#1DA1F2", name: "Twitter" },
    { icon: <FaInstagram />, url: "#", color: "#E1306C", name: "Instagram" },
    { icon: <FaLinkedinIn />, url: "#", color: "#0077B5", name: "LinkedIn" },
    { icon: <FaYoutube />, url: "#", color: "#FF0000", name: "YouTube" },
    { icon: <FaWhatsapp />, url: "#", color: "#25D366", name: "WhatsApp" },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-xs" />, 
      text: "Al Owais Building, Sheikh Zayed Road, Dubai", 
      color: primaryColor 
    },
    { 
      icon: <FaPhone className="text-xs" />, 
      text: "+971 50 5761914", 
      color: secondaryColor,
      href: "tel:+971505761914"
    },
    { 
      icon: <FaPhone className="text-xs" />, 
      text: "+971 52 842 6615", 
      color: secondaryColor,
      href: "tel:+971528426615"
    },
    { 
      icon: <FaEnvelope className="text-xs" />, 
      text: "info@ardyrealestate.com", 
      color: "#6B7280",
      href: "mailto:info@ardyrealestate.com"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setMessage("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative border-t border-gray-200 dark:border-gray-700">
      {/* Top Border */}
      <div className="h-0.5 bg-gradient-to-r from-[#2182BF] via-[#BF364F] to-[#2182BF]"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Brand Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <img src={Images.FullLogo} alt="Ardy Real Estate" className="w-40 h-auto" />
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Professional real estate services in Dubai. Helping investors, landlords, and tenants 
            achieve superior results with integrity and market expertise.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-2">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ x: 3 }}
                className="flex items-start space-x-2 group cursor-pointer text-sm"
              >
                <div 
                  className="p-1.5 rounded-full text-white mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-[#2182BF] transition-colors duration-200">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links Sections */}
        {footerSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide" style={{ color: primaryColor }}>
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <motion.li 
                  key={linkIndex}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-600 dark:text-gray-300 hover:text-[#BF364F] transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#BF364F] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.icon && <span className="mr-1.5">{link.icon}</span>}
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter & Social */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide mb-3" style={{ color: primaryColor }}>
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Get updates on Dubai real estate opportunities
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 w-full rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-[#2182BF] text-sm transition-all duration-200"
                required
                disabled={isSubmitting}
              />
              <motion.button 
                type="submit" 
                className="px-4 py-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] text-white rounded hover:shadow transition-all duration-200 w-full disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>
            
            {submitStatus && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-2 p-2 rounded text-xs flex items-center space-x-1 ${
                  submitStatus === "success" 
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" 
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                {submitStatus === "success" ? (
                  <FaCheckCircle className="flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="flex-shrink-0" />
                )}
                <span>{message}</span>
              </motion.div>
            )}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide mb-3" style={{ color: primaryColor }}>
              Follow Us
            </h3>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:shadow transition-all duration-200"
                  style={{ color: social.color }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: social.color,
                    color: "white"
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {currentYear} <span style={{ color: primaryColor }} className="font-semibold">Ardy Real Estate</span>. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link 
              to="/privacy" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#BF364F] transition-colors duration-200 text-xs"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#BF364F] transition-colors duration-200 text-xs"
            >
              Terms
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 dark:text-gray-300 hover:text-[#BF364F] transition-colors duration-200 text-xs"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;