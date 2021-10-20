import React,{useEffect, useState} from 'react'
import '../styles/Login.css';
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import axios from 'axios';
import {Redirect, Route} from "react-router-dom";

const Login = () =>{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
  
	const login = event => {
	  event.preventDefault();
	  axios.post("http://localhost:8000/api/users/login", { 
		  email: email, 
		  password: password,
		},
		{
		  // this will force the sending of the credentials / cookies so they can be updated
		  //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
		  //    unless withCredentials is set to true before making the request
		  withCredentials: true
		})
		.then((res) => {
		  console.log(res.cookie);
		  console.log(res);
		  console.log(res.data, 'is res data!');
		  setLoggedIn(true);
		 
		})
		.catch(err => {
		  console.log(err.response);
		  setErrorMessage(err.response.data.message);
		});
	};
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
		<p className="error-text">{errorMessage ? errorMessage : ""}</p>
      <form onSubmit={login}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
		<button type="submit" className="btn-login">LOGIN</button>
				<p className="forgot-password"><Link className="Link-forgot" to="/forgot">Forgot Username/Password?</Link></p>
			</form>
			<hr/>
				<button className="btn-signup"><Link className="Link-signup" to="/signup">SIGN UP</Link></button>
			
		</div>		
		{loggedIn ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}
		</div>
	)
}


export default Login;