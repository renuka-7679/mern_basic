import React,{ createContext} from 'react'


const Context=createContext()
export const ContextProvider=({children})=>{
let user='SND'
let age=43
let email ='snd@gmail.com'
let value={user,age,email}
return (
    <Context.Provider value ={value}>
    {children}
    </Context.Provider>
)
}

export default Context