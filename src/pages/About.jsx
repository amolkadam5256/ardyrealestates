import React from 'react'
import AboutHeroSection from '../components/AboutSection/AboutHeroSection'
import Testimonials from '../components/HomeSection/Testimonials'
import WhyChooseUs from '../components/AboutSection/WhyChooseUs'
const About = () => {
  return (
    <>
      <main>
        <AboutHeroSection />
        <Testimonials />
        <WhyChooseUs />
      </main>
    </>
  )
}

export default About