import React from 'react'

export default function TopSection(props) {
  return (
    <>
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
            <div className="icon flex-shrink-0"><i className={`fa-solid ${props.icon} `}></i></div>
            <div>
                <h4 className="title">{props.title}</h4>
                <p className="description">{props.description}</p>
                <a href="service-details.html" className="readmore stretched-link"><span>{props.text}</span><i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </>
  )
}
