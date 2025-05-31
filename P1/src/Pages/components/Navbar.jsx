import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <ul className ="navbar">
            <li className ="element"> 
              <Link to ="/H">Home</Link>
               </li>
            <li className ="element"> 
                <Link to ="/About"> About</Link>
               </li> 
          <li className ="element"> 
                <Link to ="/state"> State</Link>
               </li> 
         
            <li className ="element"> 
                <Link to ="/effect"> Effect</Link>
               </li> 
            <li className ="element"> 
                <Link to ="/ref"> Ref</Link>
               </li> 
               <li className ="element"> 
                <Link to ="/context"> Context</Link>
               </li>
               <li className ="element"> 
                <Link to="/todos"> Todos</Link>
               </li>
               <li className ="element"> 
                <Link to="/signup"> Signup</Link>
               </li>

<li className ="element"> 
                <Link to="/login"> Login</Link>
               </li>
        </ul>
    </nav>
   
  )
}

export default Navbar