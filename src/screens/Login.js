import React,{useState} from 'react'
import Navbar from '../components/Navbar';

import { useNavigate, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
   
    email: "",
    password: "",
   
  });
let navigate=useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault(); //synthetic parameter jaha pr bhi mera handle submit click ho rha hai vo parameter mera e hai
    setLoading(true);
    const response = await fetch("http://localhost:5002/api/loginuser", {
      //createuser yaha se hit hoga
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
        email: credentials.email,
        password: credentials.password,
       
      }), //we have to send our body by using stringify
    });
    setLoading(false);
    // message.success("Login successfull");
    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Store user information in an object
      const userObject = {
        _id: json._id,
        name: json.name,
        location: json.location,
        email: json.email,
        // ... add other properties as needed
    };
    console.log(credentials.email);
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("user", JSON.stringify(userObject)); // Convert to string if you want to store it as a string
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/')
    }

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
    <div>
      <Navbar />
    </div>
    {loading && <Spinner />}
   <div className="container">
        <form  className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handlesubmit}>
   <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              id="exampleInputPassword1"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
        Are You A New User??
          </Link>
</form>
</div>
 
    </div>
  )
}
