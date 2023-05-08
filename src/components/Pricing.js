import React from 'react'

export default function Pricing({prices}) {
  return (
    <>
        <div className="row gy-4">
            {prices.map((item, index) => (
                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100" key={index}>
                    <div className="pricing-item">
                        <h3>{item.name}</h3>
                        <h4><sup>$</sup>{item.price}<span> / {item.duration}</span></h4>
                        <ul>
                        {item.items.map((subItem, subIndex) => (
                            <li className={subItem.liClass} key={index+subIndex}><i className={'bi ' + subItem.iconClass}></i> {subItem.title}</li>
                        ))}
                        </ul>
                        <a href="#" className="buy-btn">Buy Now</a>
                    </div>
                </div>
            ))}
        </div>
    
    </>
  )
}
