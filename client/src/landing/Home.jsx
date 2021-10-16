import React ,{useState, useEffect} from 'react';
import '../styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import Aos from "aos";
import "aos/dist/aos.css"



const Home = (props) =>{

	const quotes = {
		0:{
			client: "Ross St. Clair, Project Lead, D2W Logistics Project",
			quote: "Having recently worked with Alvin on a class group project, I'm was really impressed with his high level of engagement and collaboration throughout the whole project. Alvin always made himself available for team meetings and was timely with his communication as well. His exceptional skill with CSS is what really brought the project together. His vision and aptitude created the wow factor that gave our project a very clean, polished, and professional look",
		},
		1: {
			client: "Vanessa Baez, R1 Concepts",
			quote: " You are a strong part of the team here at R1 forecast is important in making sure we have our highest sellers in stock and ready to be shipped out when customers order parts. I believe you have a lot of room to grow in learning different jobs here at R1. You recently began helping Inventory and I know for them it is a huge help. You always have a smile and jokes for the office super important in making sure the environment is friendly and healthy"
		},      
	};

	const [current, setCurrent] =useState(quotes[0]);

	const[ active, setActive] =  useState(0);


	const  handleClick = (e) =>{
		setCurrent(quotes[e.target.getAttribute("data-quote")]);
		setActive(e.target.getAttribute("data-quote"));
	}

	useEffect(() =>{
		Aos.init({duration: 2000})
	},[])


	return(
		<div>
			<div data-aos="fade-down" className="home-container">
				<Header/>				
				<div className="main-content">
					<div className="left-main-content">
						<h1 className="main-h1">A CUTTING EDGE FUTURE INVENTORY SYSTEM </h1>
						<h2>Management made it more easier.</h2>
						<button className="btn-getstarted">GET STARTED NOW</button>
					</div>
					
					<div className="right-main-content">
						<img src="/images/investment-data/amico.svg" alt="business-person"/>	
					</div>	
				</div>	
			</div>

			<div className="sub-container">
				<div data-aos="zoom-in-down" className="sub-content-card">
					<img src="/images/product-tour/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
				<div data-aos="zoom-in-down" data-aos-delay="500" className="sub-content-card">
					<img src="/images/charts/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
				<div data-aos="zoom-in-down" data-aos-delay="800" className="sub-content-card">
					<img src="/images/address/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
			</div>
			<div data-aos="fade-up" className="sub-text">
				<div>
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis adipiscing elit cras aliquam. Tortor in non scelerisque pretium, scelerisque hac cursus leo. </p>
					<button className="btn-getstarted">GET FREE TRIAL</button>
				</div>
			</div>
			<div data-aos="fade-up" className="services-container">
			<h1>WHY ALYH INVENTORY MANAGEMENT SYSTEM?</h1>
				<div className="services-grid">
			
				<div data-aos="fade-down" className="services-card">
					<img src="images/ri_customer-service-2-fill.svg" alt="" className=""/>
					<p>Customer Support Friendly</p>
				</div>
				<div data-aos="fade-down"  className="services-card">
					<img src="images/ri_truck-line.svg" alt="" className=""/>
					<p>Warehouse Tracking System</p>
				</div>
				<div data-aos="fade-down"  className="services-card">
					<img src="images/ri_secure-payment-line.svg" alt="" className=""/>
					<p>Fast amd Secured Billing Management</p>
				</div>
				<div data-aos="fade-down" className="services-card">
					<img src="images/ri_arrow-up-down-fill.svg" alt="" className=""/>
					<p>Great Referral and Leads Feature</p>
				</div>
				<div data-aos="fade-down" className="services-card">
					<img src="/images/ri_admin-line.svg" alt="" className=""/>
					<p>Administrator Dashboard</p>
				</div>
				<div data-aos="fade-down" className="services-card">
					<img src="/images/ri_money-dollar-circle-line.svg" alt="" className=""/>
						<p>Cash Revenue Increase</p>
				</div>
				</div>
			
			</div>

			<div data-aos="fade-up" className="testimonials-container">
				<div className="carousel-container">
				<p className="quote-font">"{current.quote}"</p>
				<p className="client-font">-{current.client}</p>
				<div className="carousel-btn">
					{
						Object.keys(quotes).map(index => (
							active?
										<span onClick={e => handleClick(e)} data-quote={index} key={index}
								/>
							:<span onClick={e => handleClick(e)} data-quote={index} key={index}
							/>
						))
					
					}
				</div>	
				<div data-aos="" className="city-wave">
					<img src="/images/city wave.svg" alt="wave"	 width="1500"/> 	
				</div>
				</div>
					
			</div>

			
			<Footer/>
		</div>
	)
}

export default Home;