import React, { useEffect, useState } from 'react'
import '../styles/dashboard/Navigation.css'


const Navigation  = () => {
	return (
		<div className="dash-navigation">
			<ul class="dropdown">
				<li>Home</li>
				<li>
					<div>Patterns</div>
					{/* <!-- First level sub dropdown --> */}
					<ul>
						<li>Layout</li>
						<li>Input</li>
						<li>
							<div>Navigation</div>
							{/* <!-- Second level sub dropdown --> */}
							<ul>
								<li>Breadcrumb</li>
								<li>Dropdown</li>
								<li>Menu</li>
								<li>Nested dropdown</li>
							</ul>
						</li>
						<li>Display</li>
						<li>Feedback</li>
					</ul>
				</li>
				<li>Products</li>
				<li>About</li>
			</ul>
		</div>
	)
}



export default Navigation;
