import React, {createContext, useEffect, useReducer } from 'react'
import { initialState, UserReducer } from '../reducers/UserReducer'

export const UserContext = createContext()

export default ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, initialState)

    useEffect(() => {
        localStorage.setItem('token', 'asgdyuasge236546qasd')
    }, [])

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}