import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
	<header id="header" className="header d-flex align-items-center fixed-top sticked">
		<div className="container-fluid container-xl d-flex align-items-center justify-content-between">

		<Link to={'/'} className="logo d-flex align-items-center">
			<img src="assets/img/logo.png" alt="" />
			<h1>Logis</h1>
		</Link>

		<i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
		<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
		<nav id="navbar" className="navbar">
			<ul>
				<li><Link to={'/'} className="active">Home</Link></li>
				<li><Link to={'/about'}>About</Link></li>
				<li><Link to={'/services'}>Services</Link></li>
				<li><Link to={'/pricing'}>Pricing</Link></li>
				<li><Link to={'/login'}>Login</Link></li>
			</ul>
		</nav>

		</div>
	</header>
    </>
  )
}
