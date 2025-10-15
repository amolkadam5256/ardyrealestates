import React from 'react'
import HeroSection from '../components/HomeSection/HeroSection'
import Properties from '../components/HomeSection/Properties'
import Testimonials from '../components/HomeSection/Testimonials'
import AboutSection from '../components/HomeSection/AboutSection'
const Home = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection/>
        <Properties/>
        <Testimonials/>
      </main>
    </>
  )
}

export default Home