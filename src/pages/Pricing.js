import React from 'react'
import PricingComponent from '../components/Pricing'
import Banner from '../components/Banner'
import { Config } from "../Config";
export default function Pricing() {
  return (
    <>
    <Banner title={'Pricing'} description={'Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.'} src={'assets/img/page-header.jpg'}/>
    <main id="main">
      <section id="pricing" className="pricing pt-0">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <span>Pricing</span>
              <h2>Pricing</h2>
            </div>
            <PricingComponent prices={Config.pricePackage}/>
          </div>
        </section>
    </main>
    </>


  )
}
