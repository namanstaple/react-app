import React from 'react'

export default function Cta(props) {
  return (
        <>
            <section id="call-to-action" className="call-to-action">
                <div className="container" data-aos="zoom-out">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h3>{props.title}</h3>
                            <p>{props.text} </p>
                            <a className="cta-btn" href={props.url}>{props.btnText}</a>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
