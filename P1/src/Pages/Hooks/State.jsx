import React, { useState } from 'react'
import { useEffect } from "react";

const State = () => {
    const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount1(count1 - 1);
    }

useEffect(()=>{
  console.log("Count changed");
 
  })
    return (
        <>
            <div>

                <h1>UseState example</h1>
                <h1>Count:{count}</h1>
                <button onClick={handleIncrement}>Increment</button>
            </div>
            <div>

                <h1>UseState example</h1>
                <h1>Count:{count1}</h1>
                <button onClick={handleDecrement}>Decrement</button>

            </div>
            <div>
                <button onClick={()=>setCount(0) & setCount1(0) }> Reset</button>
            </div>

        </>
    )
}
export default State