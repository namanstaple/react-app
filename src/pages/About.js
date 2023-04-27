import React from 'react'
import  AboutSection from '../components/About'
import Counter from '../components/Counter'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Faq from '../components/Faq'
import Banner from '../components/Banner'
export default function About() {
  return (
    <>
        <Banner title={'About'} description={'Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.'} src={'assets/img/page-header.jpg'}/>
        <main id="main">

			<AboutSection/>
			<section id="stats-counter" class="stats-counter pt-0">
				<div class="container aos-init aos-animate" data-aos="fade-up">
					<div className="row gy-4" data-aos="fade-up" data-aos-delay="400">
						<Counter tile={'Clients'} count={'232'}/>
						<Counter tile={'Projects'} count={'521'}/>
						<Counter tile={'Hours Of Support'} count={'1453'}/>
						<Counter tile={'Workers'} count={'32'}/>
					</div>
				</div>
			</section>
			<Team/>
			<Testimonial/>
			<Faq/>
		</main>
    </>
    
  )
}
