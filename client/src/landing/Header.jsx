import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

const Header = () =>{

return ( 
	<div className="navigation-container">
		<div className="navigation-wrapper">
			<div className="logo">
			<img src="/images/logo.png" alt="logo"/>
			<h1 className="logo">ALYH</h1>
			</div>
			
			<div className="navigation-list">
						<button className="button-item">Home</button>
						<button className="button-item">Service</button>
						<button className="button-item">About</button>
						<button className="button-item">Contact us</button>
						<button className="button-item"><Link to="/login">Login</Link></button>
			</div>	

		</div>

	</div>
)
}


export default Header;