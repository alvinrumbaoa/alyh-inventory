import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

const Header = () =>{

return ( 
	<div className="navigation-container">
		<div className="navigation-wrapper">
			<div className="logo">
			<img src="/images/logo.png" alt="logo"/>
			<h1 className="logo">ALYH</h1>
			</div>
			
			<ul>
						<li className="list-item">Home</li>
						<li className="list-item">Service</li>
						<li className="list-item">About</li>
						<li className="list-item">Contact us</li>
						<li className="list-item"><Link to="/login">Login</Link></li>
			</ul>	

		</div>

	</div>
)
}


export default Header;