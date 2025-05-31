import React from 'react'
import { link } from 'react-router-dom'

const Form = () => {
  return (
    <div>
        <h1> Controlled Form</h1>
        <form action ="" onsubmit={handleSubmit}>
            <label htmlFor ="name"> Name</label>
            <input type ="text" name ='name' value ={FormData.name} onChange ={handleChange}/>
            <label htmlFor ="email"> Email</label>
            <input type ="email" name ='naemailme' value ={FormData.email} onChange ={handleChange}/>
            
        </form>
        </div>
  )
}

export default Form