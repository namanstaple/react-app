import React from 'react'
import Counter from './Counter'

export default function HeroScreen() {
  return (
    <>
       <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row gy-4 d-flex justify-content-between">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>

                        <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                            <input type="text" className="form-control" placeholder="ZIP code or CitY"/>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                        <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">
                            <Counter tile={'Clients'} count={'232'}/>
                            <Counter tile={'Projects'} count={'521'}/>
                            <Counter tile={'Hours Of Support'} count={'1453'}/>
                            <Counter tile={'Workers'} count={'32'}/>
                        </div>
                    </div>

                    <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt=""/>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}
