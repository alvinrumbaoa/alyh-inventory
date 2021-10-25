import React, { useEffect, useState } from 'react'
import '../styles/dashboard/Navigation.css'
import { Link } from "react-router-dom";
const Navigation  = () => {

		const [navbarOpen, setNavbarOpen] = useState(false);			
		const dropDownHandler = ()=>{
			setNavbarOpen(!navbarOpen);
		

		}
	return (
		<div className="dash-navigation">
			<div className="sidebar">
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-home"></i> Home</Link>
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-wrench">Customers</i> </Link>
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-user"></i> Deliveries</Link>
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-envelope"></i> Items</Link>
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-envelope"></i> Employee</Link>
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-envelope"></i> Reports</Link>
			<Link className="Link" to="/customers"><i class="fa fa-fw fa-envelope"></i> Sales</Link>
		</div>

			
		</div>
	)
}



export default Navigation;
