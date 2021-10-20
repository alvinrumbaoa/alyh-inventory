import React from 'react'
import '../styles/dashboard/DashboardHome.css'
const DashboardHome = ()=> {
	return (
		<div className="home-dashboard">
			<div className="user-welcome">
					<h1>Welcome back , username </h1>
			</div>
		
			{/* Reports */}
			{/* Chart Sales */}
			<div className="products">
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
				<h1>Total Sales:</h1>
				
			</div>
		</div>
	)
}

export default DashboardHome;
