import React from 'react'

export default function TopSection(props) {
  return (
    <>
        <div class="breadcrumbs">
            <div class="page-header d-flex align-items-center" style={{backgroundImage: `url(${props.src})`}}>
                <div class="container position-relative">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-6 text-center">
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                    <div class="container">
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
