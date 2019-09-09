import React, { useState, createContext } from 'react'

export const UserContext = createContext({})

export const UserProvider = ( {children} ) => {
    const [user, setUser] = useState({email: ""})
    return <UserContext.Provider value={ [user, setUser] }>
        {children}
    </UserContext.Provider>
}