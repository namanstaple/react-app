import React from 'react'

export default function Feature({features}) {
  return (
    <>
        {
            features.map((item, index) => (
                <div className="row gy-4 align-items-center features-item" data-aos="fade-up" key={index}>
                    <div className={'col-md-5 ' + item.class}>
                        <img src={item.img} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-7">
                        <h3>{item.title}</h3>
                        <p className="fst-italic">
                            {item.subTitle}
                        </p>
                        <ul>
                            {item.items.map((subItem, subIndex) => (
                                <li key={index+subIndex}><i className={'bi ' + subItem.iconClass}></i> {subItem.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))
        }
    </>
  )
}
