import React, { useEffect, useState } from 'react'
import '../styles/dashboard/Navigation.css'

const Navigation  = () => {

		const [navbarOpen, setNavbarOpen] = useState(false);			
		const dropDownHandler = ()=>{
			setNavbarOpen(!navbarOpen);
		

		}
	return (
		<div className="dash-navigation">
			<div class="sidebar">
			<a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
			<a href="#services"><i class="fa fa-fw fa-wrench"></i> Customers</a>
			<a href="#clients"><i class="fa fa-fw fa-user"></i> Deliveries</a>
			<a href="#contact"><i class="fa fa-fw fa-envelope"></i> Items</a>
			<a href="#contact"><i class="fa fa-fw fa-envelope"></i> Employee</a>
			<a href="#contact"><i class="fa fa-fw fa-envelope"></i> Reports</a>
			<a href="#contact"><i class="fa fa-fw fa-envelope"></i> Sales</a>
			<div className><a href="#settings"><i class="fa fa-fw fa-wrench"></i> Settings</a></div>
			</div>

			
		</div>
	)
}



export default Navigation;
