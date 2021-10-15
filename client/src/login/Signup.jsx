import React,{useEffect} from 'react'
import '../styles/Signup.css';
import Aos from "aos";
import "aos/dist/aos.css"

const Signup = () =>{




	useEffect(() =>{
		Aos.init({duration: 1500})
	},[])

	return (
		<div data-aos="fade-down" className="signup-container">
		
		<div className="signup-card">
		<div className="logo">
			<img src="/images/logo.png" alt="logo"/>
			<h1 className="logo">ALYH</h1>
		</div>
	
			<form>
			<h1 className="signup-main-text">Sign up</h1>
				<p>Username:</p><input type="text" className="user-name"/>
				<p>Password:</p><input type="password" className="pass-word"/>
				<p>Confirm Password:</p><input type="password" className="pass-word"/>
				<p>First Name:</p><input type="text" className="first-name"/>
				<p>Last Name:</p><input type="text" className="last-name"/>
				<p>Email:</p><input type="text" className="email"/>
				<button className="btn-signup">SIGN UP</button>
			</form>
		</div>		
		
			
		</div>
	)
}


export default Signup;