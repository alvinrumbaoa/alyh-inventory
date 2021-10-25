import React from 'react'

export default function AddCustomer() {
	const [id, setID] = useState(0);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [middleInitial, setMiddleInitial] = useState("");
	const [email, setEemail] = useState("");
	const [address, setAddress] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("0/0/000");
	const [primaryPhone, setPrimaryPhone] = useState(0);
	const [mobilePhone , setMobilePhone] = useState(0);
	const [ errs, setErrs ] = useState({});

	const submitHandler = (e)=>{
		e.preventDefault();
		axios.post("http://localhost:8080/api/customers",{
		id: id,
		firstName: firstName,
		lastName: lastName,
		middleInitial: middleInitial,
		address: address,
		email: email,
		DOB: dateOfBirth,
		primaryPhone: primaryPhone,
		mobilePhone: mobilePhone,
		

		})
		.then((res)=>{
			if(res.data.errors){
				console.log(res.data.errors);
				setErrs(res.data.errors);
			}
			else{
				console.log(res.data);
			}
		})
		.catch((err)=>{
			console.log(err);

		})
	}


	
	return (
		
		<div>
			<div>Create Customer</div>
			<form onSubmit={submitHandler}>
			
				<label>Last Name:</label><input type="text" name="lastName" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
				<label>First Name:</label><input type="text" name="firstName" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
				<label>Middle Initial:</label><input type="text" name="middleInitial" value={middleInitial} onChange={(e)=> setMiddleInitial(e.target.value)}/>
				<label>Email:</label><input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
				<label>Address:</label><input type="text" name="address" value={address} onChange={(e)=> setAddress(e.target.value)}/>
				<label>Date of Birth: </label><input type="date"/>
				<label>Primary Phone:</label><input type="tel"/>
				<label>Mobile Phone:</label><input type="tel"/>
				<button type="submit">Create Customer</button>
			</form>
				
		</div>
	)
}
