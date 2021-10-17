import React from 'react'
import Navigation  from './Navigation'
import DashboardHome from './DashboardHome'
import '../styles/dashboard/Dashboard.css'

export default function Dashboard() {
	return (
		<div className="dashboard-container">
			<Navigation/>
			<DashboardHome/>
		</div>	
	)
}
