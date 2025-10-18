import React from 'react'
import HeroContactSection from '../components/ContactSection/HeroContactSection'
import WhyChooseUs from '../components/AboutSection/WhyChooseUs'
import ContactForm from '../components/ContactSection/ContactForm'

const Contact = () => {
  return (
    <>
      <main>
        <HeroContactSection/>
        <ContactForm/>
        <WhyChooseUs/>
      </main>
    </>
  )
}

export default Contact