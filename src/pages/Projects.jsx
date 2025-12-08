import React from 'react'
import HeroSection from '../components/ServicesSection/HeroSection'
import ServicesGrid  from '../components/ServicesSection/ServicesGrid'
import ProcessSection from '../components/ServicesSection/ProcessSection'
import WhyChooseUs from '../components/AboutSection/WhyChooseUs'
const Projects = () => {
  return (
    <>
      <main>
        <HeroSection/>
        <ServicesGrid />
        <ProcessSection/>
        <WhyChooseUs />
      </main>
    </>
  )
}

export default Projects;