import React from 'react'

export default function Banner(props) {
  return (
    <>
        <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" style={{backgroundImage: `url(${props.src})`}}>
                <div className="container position-relative">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                    <div className="container">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>{props.title}</li>
                        </ol>
                    </div>
            </nav>
        </div>
    </>

  )
}
