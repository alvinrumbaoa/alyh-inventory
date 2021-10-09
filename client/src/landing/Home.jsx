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
					<div>
					<h1>Landing Page</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum deserunt debitis quisquam ab beatae quasi corporis adipisci incidunt minus vitae maxime provident harum dolore blanditiis alias explicabo, facere quas!</p>
					</div>
			
				</div>	
			</div>

			<div className="sub-container">
				<div>
					<h2>Sub</h2>
					<p>content here</p>
				</div>
				<div>
					<h2>Sub</h2>
					<p>content here</p>
				</div>
				<div>
					<h2>Sub</h2>
					<p>content here</p>
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