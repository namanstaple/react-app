import React from 'react'
import HomeComponent from '../components/Home'
import ServicesComponent from '../components/Services'
import { Config } from "../Config";
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
		<section id="service" className="services pt-0">
			<div className="container" data-aos="fade-up">
				<div className="section-header">
					<span>Our Services</span>
					<h2>Our Services</h2>

				</div>
				<ServicesComponent serviceItems={Config.servicesItem}/>
			</div>
		</section>
		<section id="features" className="features">
			<div className="container">
				<div className="section-header">
					<span>Features</span>
					<h2>Features</h2>
				</div>
				<Feature features={Config.featureItems}/>
			</div>
		</section>
		<Testimonial/>
		<Faq/>
     </main>
    </>


  )
}
