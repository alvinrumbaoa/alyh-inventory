import React, { useEffect, useState } from 'react'

const Navigation  = () => {
	return (
		<div className="dash-navigation">
			<p>Dashboard</p>
			<p>Customers</p>
				<ul>
					<li>View Customer</li>
					<li>Create Customer</li>
					<li>Update Customer</li>
				</ul>
			<p>Employees</p>
				<ul>
					<li>View Employees</li>
					<li>Create Employees</li>
					<li>Update Employees</li>
				</ul>
			<p>Items</p>
				<ul>
					<li>View Items</li>
					<li>Create Items</li>
					<li>Update Items</li>
				</ul>
			<p>Sales Orders</p>
				<ul>
					<li>View Sales</li>
					<li>Sales Reports</li>
					<li>New Sales Order</li>
				</ul>
			<p>Deliveries</p>
				<ul>
					<li>View Deliveries</li>
					<li>Delivery Ticket</li>
					<li>Location</li>
					<li>Delivery Reports</li>
				</ul>
			<p>Invoices</p>
				<ul>
					<li>View Invoices</li>
					<li>Pending Billingt</li>
					<li>Print Orders</li>
				</ul>
			<p>Referral</p>
				<ul>
					<li>Add Referral</li>
					<li>View All Referrals</li>
				</ul>
			<p>Physicians</p>
				<ul>
					<li>Add Physician</li>
					<li>View All Physicianss</li>
				</ul>
			<p>Document</p>
				<ul>
					<li>Add Physician</li>
					<li>View All Physicianss</li>
				</ul>
			<p>Vendors</p>
				<ul>
					<li>Add Vendor</li>
					<li>View All Vendors</li>
				</ul>
				<p>Reports</p>
				<ul>
					<li>Monthly Report</li>
					<li>Sales Report</li>
				</ul>
		</div>
	)
}



export default Navigation;
