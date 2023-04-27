import React from 'react'

export default function TeamDetails(props) {
  return (
    <>
        <div className="col-lg-4 col-md-6 d-flex">
            <div className="member">
                <img src={props.src} className="img-fluid" alt=""/>
                <div className="member-content">
                    <h4>{props.name}</h4>
                    <span>{props.designation}</span>
                    <p>
                    {props.description}
                    </p>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
