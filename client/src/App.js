import React, {useState} from 'react';
import './App.css';
import {Switch, Route, } from "react-router-dom";
import Home from "./landing/Home";
import Login from "./login/Login";
import Signup from "./login/Signup";
import About from "./landing/About";
import Services from "./landing/Services";
import Dashboard from "./dashboard/Dashboard";
import Contactus from "./landing/Contactus"
import ViewCustomer from "./dashboard/customer/ViewCustomer";
import AddCustomer from "./dashboard/customer/AddCustomer";





function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  
  return (
    <div className="App">
          <Switch >
                {/* Landing Homepage */}
                <Route exact path = "/" component = { Home }/>  
                <Route path = "/about" component = { About }/>  
                <Route path = "/contactus" component = { Contactus }/>   
                <Route path = "/services" component = { Services }/>  

                {/* Login and Registration */}
                <Route path = "/login" component = { Login }/> 
                <Route path = "/signup" component = { Signup }/>
                <Route path = "/dashboard" component = { Dashboard }/>
                
                <Route path = "/customers" component = { ViewCustomer }/>
                <Route path = "/createcustomer" component = { AddCustomer }/>
                  {/* Item Inquiry */}
                  {/* Order */} 
                  {/* Cart  */}
            </Switch >
    </div>
  );
}

export default App;
