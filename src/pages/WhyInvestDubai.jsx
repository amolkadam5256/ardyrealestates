import React from 'react'

import HeroSectionDubai from '../components/WhyInvestDubai_Component/HeroSectionDubai'
import WhyChooseDubai from '../components/WhyInvestDubai_Component/WhyChooseDubai'
import Testimonials from '../components/HomeSection/Testimonials'
import Properties_Features from '../components/WhyInvestDubai_Component/Properties_Features'
const WhyInvestDubai = () => {
  return (
    <>
      <main>
        <HeroSectionDubai />
        <Properties_Features/>
        <WhyChooseDubai />
        <Testimonials/>
      </main>
    </>
  )
}

export default WhyInvestDubai