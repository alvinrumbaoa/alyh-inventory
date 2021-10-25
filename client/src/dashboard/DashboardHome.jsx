import React from 'react'
import '../styles/dashboard/DashboardHome.css'
const DashboardHome = ()=> {
	return (
		<div className="home-dashboard">
					<h1>Welcome back , username </h1>
			<div className="user-welcome">
			
			</div>
			{/* Reports */}
			{/* Chart Sales */}
			<div className="grid-container">
				<div className="cards">
					<h1>Count of products</h1>

				</div>
				<div className="cards">
					<h1>Products out of stock</h1>
			
				</div>
				<div className="cards">
					<h1>Products overstocked</h1>
			
				</div>
				<div className="cards">
					<h1>Sales</h1>

				</div>
				<div className="cards">
					<h1>Top Selling Items</h1>
					
				</div>
				<div className="cards">
					<h1>Total Sales:</h1>
					
				</div>
			</div>
			
		</div>
	)
}

export default DashboardHome;
