import React from 'react'
import CardView from './CardView'

export default function Services() {
  return (
    <>
        <section id="service" className="services pt-0">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <span>Our Services</span>
                    <h2>Our Services</h2>

                </div>

                <div className="row gy-4">
                    <CardView delay={'100'}  src={'assets/img/storage-service.jpg'} title={'Storage'} description={'Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit'}/>
                    <CardView delay={'200'}  src={'assets/img/logistics-service.jpg'} title={'Logistics'} description={'Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi'}/>
                    <CardView delay={'300'}  src={'assets/img/cargo-service.jpg'} title={'Cargo'} description={'Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil'}/>
                    <CardView delay={'400'}  src={'assets/img/trucking-service.jpg'} title={'Trucking'} description={'Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil'}/>
                    <CardView delay={'500'}  src={'assets/img/packaging-service.jpg'} title={'Packaging'} description={'Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates'}/>
                    <CardView delay={'600'}  src={'assets/img/warehousing-service.jpg'} title={'Warehousing'} description={'Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla'}/>
                </div>

            </div>
        </section>
    </>
  )
}
