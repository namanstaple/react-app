import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Cta from '../components/Cta'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import HeroScreen from '../components/HeroScreen'
import { Config } from "../Config";
import TopSection from '../components/TopSection'
export default function Home() {
  
  return (
    <>
        <HeroScreen/>
        <main id="main">
        	<section id="featured-services" className="featured-services pb-0">
            	<div className="container">
                	<div className="row gy-4">
						<TopSection title={'Lorem Ipsum'} description={'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident'} text={'Learn More'} icon={'fa-cart-flatbed'} />
						<TopSection title={'Dolor Sitema'} description={'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata'} text={'Learn More'} icon={'fa-truck'} />
						<TopSection title={'Sed ut perspiciatis'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'} text={'Learn More'} icon={'fa-truck-ramp-box'} />
					</div>
				</div>
			</section>
          <About/>
			<section id="service" className="services pt-0">
				<div className="container" data-aos="fade-up">

					<div className="section-header">
						<span>Our Services</span>
						<h2>Our Services</h2>

					</div>
					<Services serviceItems={Config.servicesItem}/>
				</div>
			</section>
          <Cta title={'Call To Action'} text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} url={'#'} btnText={'Call To Action Submit'}/>
		  	<section id="features" className="features">
            	<div className="container">
					<div className="section-header">
						<span>Features</span>
						<h2>Features</h2>
					</div>
		  			<Feature features={Config.featureItems}/>
				</div>
			</section>
          <section id="pricing" className="pricing pt-0">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <span>Pricing</span>
                    <h2>Pricing</h2>
                </div>
                  <Pricing prices={Config.pricePackage}/>
              </div>
          </section>
          <Testimonial/>
          <Faq/>
        </main>
    </>
  )
}
