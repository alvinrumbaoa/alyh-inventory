import './App.css';
import { Switch, Route, } from "react-router-dom";
import Home from "./landing/Home"


function App() {
  return (
    <div className="App">
        <header className="App-header">
             {/* Landing Page */}
            <Home/> 
          


            {/* Login and Registration */}
            

            {/* Admin */}
            {/* Customer */}
            {/* Item Inquiry */}
            {/* Order */} 
            {/* Cart  */}
        </header>
    </div>
  );
}

export default App;
