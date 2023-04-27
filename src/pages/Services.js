import React from 'react'
import HomeComponent from '../components/Home'
import ServicesComponent from '../components/Services'
import Feature from '../components/Feature'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import Banner from '../components/Banner'
export default function Services() {
  return (
    <>
     <Banner title={'Services'} description={'Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.'} src={'assets/img/page-header.jpg'}/>
     <main id="main">

      <HomeComponent/>
      <ServicesComponent/>
      <Feature/>
      <Testimonial/>
      <Faq/>
     </main>
    </>


  )
}
