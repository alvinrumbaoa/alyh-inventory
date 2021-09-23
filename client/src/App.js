import './App.css';
import { Switch, Route, } from "react-router-dom";
import Home from "./views/Home"


function App() {
  return (
    <div className="App">
        <header className="App-header">
            <Home/> 
            {/* Landing Page */}
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
