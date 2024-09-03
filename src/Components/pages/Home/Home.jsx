import React from 'react'
import Layout from '../../Layout/Layout'
import HeroSection from '../../HeroSection/HeroSection'
import CategoryArea from '../../CategoryArea/CategoryArea'
import CardsArea from '../../CardsArea/CardsArea'
import TestimonialArea from '../../TeastimonialArea/TestimonialArea'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
      <Layout>
        <HeroSection/>
        <CategoryArea/>
        <CardsArea/>
        <TestimonialArea/>
      </Layout>
  )
}

export default Home