import React from 'react';
import '../styles/Footer.css';

const Footer = () =>{

return ( 
	<div className="footer-container">
		<div className="footer-wrapper">
			<div className="footer-navigation">
				<div className="item-list">
				<h2>SUPPORT</h2>
					<p>ORDER STATUS</p>
					<p>SHOPPING & HANDLING</p>
					<p>ORDER STATUS</p>
				</div>
				
				<div className="item-list">
				<h2>ABOUT</h2>
					<p>OUR STORY</p>
					<p>CONTACT US</p>
					<p>CAREERS</p>
					<p>FAQ</p>
				</div>
				<div className="item-list">
				<h2>MARKETING</h2>
					<p>ADVERTISE</p>
					<p>MENTORSHIP</p>
				<h2>LEGAL</h2>
					<p>PRIVACY & TERMS</p>
					<p>TERMS OF SERVICES</p>
				</div>
			</div>
			<div className="footer-address">
				<h2 className="icon-center"><img src="/images/eva_pin-fill.svg" alt="maps" width="40" height="40"/>CORPORATE OFFICE:</h2>
				<h2>1234 South North Street Malibu, CA 98002</h2>
				<p>Alvin Rumbaoa 2021®</p>
			</div>
			<div className="footer-social">
				<h4>Newsletter, Updates and More:</h4>
				<div className="footer-social-newsletter">
					<img  src="/images/bx_bx-news.svg" alt="newspaper"width="40" height="40" /> 
					<input type="text" className="newsletter-text"/>
					<button className="btn-newsletter">SIGN UP</button>
				</div>
				
				
				<div className="social-media-icons">
				<h3>Follow us on:</h3>
				<img src="/images/ig.svg" alt="instagram-icon" width="40" height="40"/>
				<img src="/images/facebook.svg" alt="facebook-icon" width="40" height="40"/>
				<img src="/images/linkedin.svg" alt="pnkedin-icon" width="40" height="40"/>
				<img src="/images/google.svg" alt="google-icon" width="40" height="40"/>
				<img src="/images/ri_youtube-fill.svg" alt="youtube-icon" width="40" height="40"/>
				<img src="/images/twitter.svg" alt="twitter-icon" width="40" height="40"/>
				</div>
			
			</div>
		</div>

	</div>
)
}


export default Footer;