import React from "react";
import { FaLinkedin, FaBuilding, FaHandshake } from "react-icons/fa";
import Images from "../../assets/images/images";

const Director = () => (
    <article
        className="flex flex-col lg:flex-row items-center bg-white overflow-hidden mx-0 lg:mx-8"
        itemScope
        itemType="https://schema.org/Person"
    >
        {/* Image Section - Full Height */}
        <div className="w-full lg:w-2/5 h-96 lg:h-auto">
            <img
                src={Images.zakki_khan2}
                alt="Zakki Khan - Director, ARDY Real Estate"
                className="w-full h-full object-cover"
                itemProp="image"
            />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 p-8 lg:p-10 space-y-6">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2182BF]/10 to-[#BF364F]/10 px-4 py-2 rounded-full border border-[#2182BF]/20">
                <div className="w-2 h-2 bg-gradient-to-r from-[#2182BF] to-[#BF364F] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700 tracking-wide">DIRECTOR PROFILE</span>
            </div>

            {/* Name and Title */}
            <header className="space-y-3">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900" itemProp="name">
                    Zakki Khan
                </h1>
                <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]" itemProp="jobTitle">
                    Director, ARDY Real Estate | Majestic Realties & Webmarkx LLC (Dubai)
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <FaBuilding className="text-[#2182BF]" />
                        <span>Real Estate Visionary</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaHandshake className="text-[#BF364F]" />
                        <span>11+ Years Experience</span>
                    </div>
                </div>
            </header>

            {/* Description */}
            <section className="text-gray-700 leading-relaxed space-y-4" itemProp="description">
                <p>
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#2182BF] to-[#BF364F]">Zakki Khan</strong>, Director of <strong>ARDY Real Estate</strong>, brings 11+ years of comprehensive expertise in real estate and digital marketing, guiding hundreds of investors toward smart property decisions across India and the UAE.
                </p>

                <p>
                    As the driving force behind ARDY Real Estate - the Dubai-based extension of the Majestic Group - he has established the company as a trusted partner for premium real estate investments in the UAE's dynamic property market.
                </p>

                <div className="bg-gradient-to-r from-[#2182BF]/5 to-[#BF364F]/5 p-4 rounded-xl border-l-4 border-[#2182BF]">
                    <p className="text-gray-800 font-medium">
                        "Our vision is to transform every property investment into a lasting legacy, delivering exceptional opportunities with trust, transparency, and high returns."
                    </p>
                </div>
            </section>

            {/* Footer with LinkedIn */}
            <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Company Link */}
                    <a
                        href="https://www.majesticrealties.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#2182BF] transition-colors duration-200 font-medium"
                        itemProp="url"
                    >
                        <FaBuilding className="text-[#2182BF]" />
                        majesticrealties.com
                    </a>

                    {/* LinkedIn Only */}
                    <a
                        href="https://www.linkedin.com/in/zakkikhan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#00669A] transition-all duration-200 font-medium"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-lg" />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </article>
);

export default Director;