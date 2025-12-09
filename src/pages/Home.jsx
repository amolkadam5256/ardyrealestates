import React from 'react'
import HeroSection from '../components/HomeSection/HeroSection'
import Properties from '../components/HomeSection/Properties'
import Testimonials from '../components/HomeSection/Testimonials'
import InvestmentCTA from '../components/HomeSection/InvestmentCTA'
import AboutSection from '../components/HomeSection/AboutSection'
const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <Properties />
        <InvestmentCTA />
        <Testimonials />
      </main>
    </>
  )
}

export default Home