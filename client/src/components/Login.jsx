import React,{useEffect} from 'react'
import '../styles/Login.css';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"

const About = () =>{

	useEffect(() =>{
		Aos.init({duration: 1500})
	},[])


	return (
		<div data-aos="fade-down" className="login-container">
		
		<div className="login-card">
		<div className="logo">
			<img src="/images/logo.png" alt="logo"/>
			<h1 className="logo">ALYH</h1>
		</div>
	
			<form>
			<h1 className="login-main-text">Log In</h1>
				<p>Username:</p><input type="text" value="Username" className="user-name"/>
				<p>Password:</p><input type="password" value="Password" className="pass-word"/>
				<button className="btn-getstarted">LOGIN</button>
				<p className="forgot-password"><Link to="/forgot">Forgot Username/Password?</Link></p>
			</form>
			<hr/>
				<button className="btn-signup">SIGN UP</button>
			
		</div>		
		
			
		</div>
	)
}


export default About;