
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import State from "./Pages/Hooks/State";
import Navbar from "./Pages/components/Navbar";
import { useEffect } from "react";
import Effect from "./Pages/Hooks/Effect";
import Ref from "./Pages/Hooks/Ref"
import Todos from "./Pages/Todos.";
import Signup from "./Pages/components/Signup";
import Login from "./Pages/components/login";




function App(){
 var name='Visaal'
 useEffect(()=>{
  console.log("Componenet Mounted")
  return(()=>{
    console.log("Componenet UnMounted")  
  })
 })
  return(
    <>

  <Navbar/>
  <Routes>
    <Route path="/" element ={<Home name={name}/>}/>
    <Route path="/About" element ={<About/>}/>
    <Route path="/state" element ={<State/>}/>
     <Route path="/effect" element ={<Effect/>}/>
     <Route path="/ref" element ={<Ref/>}/>
      <Route path="/todos" element ={<Todos/>}/>
      <Route path="/Login" element ={<Login/>}/>
      <Route path="/Signup" element ={<Signup/>}/>
      

     

  </Routes>
</>
  )
}
export default App
