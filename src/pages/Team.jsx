import React from 'react'
import Director from '../components/TeamSection/Director'
import TeamMembers from '../components/TeamSection/TeamMembers'
import InvestmentCTA from '../components/HomeSection/InvestmentCTA'
import WhyChooseUs from '../components/AboutSection/WhyChooseUs'
const Team = () => {
  return (
    <>
      <main>
        <Director/>
        <TeamMembers/>
        <InvestmentCTA/>
        <WhyChooseUs/>
      </main>
    </>
  )
}

export default Team