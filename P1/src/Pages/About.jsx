import React from 'react'
import { useEffect,useContext } from "react";
import Context from './Hooks/Context';
const About = () => {
  const {user,age,email}=useContext(Context)
  
  return (
    <div>
      <h1> I am {user}</h1>
      <h1>  Age {age}</h1>
      
    </div>
  )
}

export default About