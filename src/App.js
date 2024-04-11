import "./App.css";
import Home from "./screens/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Contact from "./screens/Contact";
import SignUp from "./screens/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from './screens/MyOrder';
import About from './screens/About'
function App() {
  // const isLoggedIn = localStorage.getItem("authToken") !== null;
  return (
  
    <CartProvider>

    <Router>
      <div>
       
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/createuser" element={<SignUp/>} />
          <Route exact path="/myOrder" element={<MyOrder/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
