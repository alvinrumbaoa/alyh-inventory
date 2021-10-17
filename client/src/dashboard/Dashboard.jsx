import React from 'react'
import Navigation  from './Navigation'
import '../styles/dashboard/Dashboard.css'

export default function Dashboard() {
	return (
		<div className="dashboard-container">
			<Navigation/>
			
			<h1>Welcome back , username </h1>
			{/* Reports */}
			{/* Chart Sales */}
			<div>
				<h1>Count of products</h1>
		
			</div>
			<div>
				<h1>Products out of stock</h1>
		
			</div>
			<div>
				<h1>Products overstocked</h1>
		
			</div>
			<div>
				<h1>Sales</h1>

			</div>
			<div>
				<h1>Top Selling Items</h1>
				
			</div>
			<div>
				<h1>Top Seller Employees</h1>
				
			</div>
		</div>
	)
}
