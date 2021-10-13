import React from 'react';
import '../styles/Header.css';

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
					
			</ul>	
			<button className="btn-login">Login</button>	
		</div>

	</div>
)
}


export default Header;