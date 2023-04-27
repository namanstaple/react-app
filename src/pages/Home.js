import React from 'react'
import HomeComponent from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Cta from '../components/Cta'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
        <Banner/>
        <main id="main">

          <HomeComponent/>
          <About/>
          <Services/>
          <Cta/>
          <Feature/>
          <Pricing/>
          <Testimonial/>
          <Faq/>
        </main>
    </>
  )
}
