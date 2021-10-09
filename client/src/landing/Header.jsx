import React from 'react';
import '../styles/Header.css';

const Header = () =>{

return ( 
	<div className="navigation-container">
		<div className="navigation-wrapper">
			<h1 className="logo">LOGO</h1>
			<ul>
						<li className="list-item">Home</li>
						<li className="list-item">Service</li>
						<li className="list-item">About</li>
						<li className="list-item">Contact us</li>
						<li className="list-item">Login</li>
			</ul>			
		</div>

	</div>
)
}


export default Header;