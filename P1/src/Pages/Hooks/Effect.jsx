import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUser(data))

    },[])
    return (
        <div>
            {users.map((user) => (

                <>
                    <p key={user.id}>{user.name}</p>
                    <p key={user.id}>{user.address.geo.lat}</p>
                    
                </>
            ))}
        </div>
    )
}

export default Effect