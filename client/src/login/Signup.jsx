import React,{useEffect, useState} from 'react'
import '../styles/Signup.css';
import {Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"
import axios from "axios";

const Signup = () =>{
	const [confirmReg, setConfirmReg] = useState("");
	const [errors, setErrors] = useState({});


	// Using a single state object to hold all data
	const [ user, setUser ] = useState({
		username: "",
		email: "", 
		firstname: "",
		lastname: "",
		password: "", 
		confirmPassword: "",
	})

	// using a single function to update the state object
	//    we can use the input's name attribute as the key in to the object
	const handleChange = (e) => {
		setUser({
		...user,
		[e.target.name]: e.target.value,
		})
	}

	const signup = e => {
		e.preventDefault();
	
		axios.post("http://localhost:8000/api/users/signup", 
		  user,             // the user state is already an object with the correct keys and values!
		  {
			// this will force the sending of the credentials / cookies so they can be updated
			//    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
			//    unless withCredentials is set to true before making the request
			withCredentials: true,
		  })
		  .then(res => {
			console.log(res.data);
			
			// when we successfully created the account, reset state for registration form
			//    We do this if we are NOT navigating automatically away from the page
			setUser({
			  username: "",
			  firstname: "",
			  lastname: "",
			  email: "", 
			  password: "", 
			  confirmPassword: "",
			})
	
			setConfirmReg("Thank you for Registering, you can now log in!");
			setErrors({});  // remember to reset errors state if it was successful
		  })
		  .catch((err) => {
			console.log(err);
			setErrors(err.response.data.errors);
		  });
	  };
	

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
		{
        confirmReg ? 
          <h4 style={{color: "green"}}>{confirmReg}</h4>
          : null
        }
		<form onSubmit={signup}>
		<div>
          <label>Username</label>
          {
            errors.username ? 
              <span className="error-text">{ errors.username.message }</span>
              : null
          }
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => handleChange(e)}
          />
		  </div>
		  <div>
		  <label>First Name:</label>
          {
            errors.firstname ? 
              <span className="error-text">{ errors.firstname.message }</span>
              : null
          }
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={(e) => handleChange(e)}
          />
        </div>
		<div>
		  <label>Last Name:</label>
          {
            errors.firstname ? 
              <span className="error-text">{ errors.lastname.message }</span>
              : null
          }
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Email</label>
          {
            errors.email? 
              <span className="error-text">{ errors.email.message }</span>
              : null
          }
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Password</label>
          {
            errors.password ? 
              <span className="error-text">{ errors.password.message }</span>
              : null
          }
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={ handleChange }
          />
        </div>
        <div>
          <label>Confirm Password</label>
          {
            errors.confirmPassword? 
              <span className="error-text">{ errors.confirmPassword.message }</span>
              : null
          }
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={ handleChange }
          />
        </div>
          <button className="btn-signup" type="submit">Signup</button>
      </form>
		</div>		
		</div>
	)
}


export default Signup;