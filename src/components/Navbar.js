import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Modal from '../Modal';

import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
import Badge from '@material-ui/core/Badge';


export default function Navbar() {

  const [loginUser, setLoginUser] = useState("");
  const[cartView,setCartView]=useState(false)

  
  let navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);
  let data=useCart()

const handleLogout= ()=>{
localStorage.removeItem("authToken");
localStorage.clear();
navigate('/login')
}



  return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">Hunger-Issues</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="btn btn-primary btn-rounded mx-2" aria-current="page" to="/">Home</Link>
          <Link className="btn btn-secondary btn-rounded mx-2" to="/about">About Us</Link> 
        </li>
      
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="btn btn-danger btn-rounded mx-2" to="/contact">Contact</Link>  {/*className="nav-link active fs-5"*/}
        </li>
        :""}
      {(localStorage.getItem("authToken"))?
      <li className="nav-item">
      <Link className="btn btn-secondary btn-rounded mx-2" to="/myOrder">My Orders</Link>  
    </li>
      :""}
      </ul>
      <li  className="nav-item me-auto mb-2 mb-lg-0">Hello, {loginUser && loginUser.name}
              </li>
      {(!localStorage.getItem("authToken"))?
      <form className='d-flex'>
          <Link className="btn btn-success btn-rounded mx-2" to="/login">Login</Link>
          <Link className="btn btn-warning btn-rounded mx-2" to="/createuser">SignUp</Link>
      </form>
    
    :
    <div>
      <div className="btn btn-success btn-rounded mx-2" onClick={()=>{setCartView(true)}} >My Cart {" "} <Badge
  badgeContent={data.length}
  color="error"
  style={{ borderRadius: '999px', padding: '5px' }}
>
  {/* Content */}
</Badge> </div>
      {cartView ? <Modal onClose={()=>{setCartView(false)}}> <Cart></Cart> </Modal>:""}
    <div className="btn btn-info btn-rounded mx-2" onClick={handleLogout} >LogOut</div>
    </div>
    }
    </div>
  </div>
</nav>
    </div>
  )
}
