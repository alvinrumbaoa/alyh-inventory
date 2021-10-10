import React from 'react';
import '../styles/Home.css'
import Header from './Header'
import Footer from './Footer'

const Home = (props) =>{

	return(
		<div>
			<div className="home-container">
				<Header/>				
				
				<div className="main-content">
					<div className="left-main-content">
						<h1>A CUTTING EDGE FUTURE INVENTORY SYSTEM </h1>
						<p>Management made it more easier.</p>
						<button className="btn-getstarted">GET STARTED NOW</button>
					</div>
					
					<div className="right-main-content">
						<img src="/images/investment-data/amico.svg" alt="business-person"/>	
					</div>	
				</div>	
			</div>

			<div className="sub-container">
				<div className="sub-content-card">
					<img src="/images/product-tour/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
				<div className="sub-content-card">
					<img src="/images/charts/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
				<div className="sub-content-card">
					<img src="/images/address/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
			</div>

			<div className="services-container">
				<div>
					<h2>Services Content</h2>
				</div>
			</div>

			<div className="testimonials-container">
				<h1> Testimonies</h1>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;