import React from 'react'

export default function Services({serviceItems}) {
    console.log(serviceItems);
  return (
    <>
        <div className="row gy-4">
            {serviceItems.map((item, index) => (
               <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={item.delay} key={index}>
                    <div className="card">
                        <div className="card-img">
                            <img src={item.src} alt="" className="img-fluid"/>
                        </div>
                        <h3><a href="service-details.html" className="stretched-link">{[item.title]}</a></h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            
        </div>
    </>
  )
}
