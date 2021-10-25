import React, {useeEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Navigation from "../Navigation"

const  ViewCustomer =()=> {
	const [allCustomers, setAllCustomers] = useState([]);


	useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("http://localhost:8000/api/customers") //notes: use the same string that works for a 'get' in postman
            .then((res) => {
                console.log(res.data); //this is just checking that the data returned correctly in the console
				setAllCustomers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
	
	
	
	return (
		<div> 
		<Navigation/>
				<h2>View All Customers</h2>	
				<div><Link className="Link" to="/createcustomer">Create Customer</Link></div>
				<table>
					<thead>
						<th>ID</th>
						<th>Last Name</th>
						<th>First Name:</th>
						<th>Middle Initial</th>
						<th>Email</th>
						<th>Address</th>
						<th>DOB</th>
						<th>Phone</th>
						<th>Mobile</th>
					</thead>
					<tbody>
						{
						allCustomers.map((allCustomers, index)=>{
						<tr>
							<td>{allCustomers.id}</td>
							<td>{allCustomers.firstName}</td>
							<td>{allCustomers.lastName}</td>
							<td>{allCustomers.middleInitial}</td>
							<td>{allCustomers.email}</td>
							<td>{allCustomers.address}</td>
							<td>{allCustomers.DOB}</td>
							<td>{allCustomers.PrimaryPhone}</td>
							<td>{allCustomers.mobilePhone}</td>
						</tr>



						})
					}
					</tbody>
				</table>
		</div>
	)
}

export default ViewCustomer
