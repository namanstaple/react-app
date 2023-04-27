import React from 'react'
import { useState } from "react"
import axios from 'axios'

function Login() {
    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
        
        // Handle validations
        axios
          .post(`${process.env.REACT_APP_API_BASE_URL}/login`, { email, password })
          .then(response => {
            console.log(response)
            // Handle response
        });
    }
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  return (
    <>
         <main id="main">
            <section id="login" className="login">
				<div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card shadow">
                                <div className="card-title text-center border-bottom">
                                    <h2 className="p-3">Login</h2>
                                </div>
                                <div className="card-body">
                                    <form  action="" id="login" method="post" onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="username" className="form-label">Username/Email</label>
                                            <input type="text" className="form-control" id="username" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className="mb-4">
                                            <input type="checkbox" className="form-check-input" id="remember" />
                                            <label htmlFor="remember" className="form-label">Remember Me</label>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary text-light main-bg">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         </main>

    </>
  )
}

export default Login