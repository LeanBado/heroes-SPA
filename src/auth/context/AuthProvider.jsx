import React from 'react'
import { useReducer } from 'react'
import { types } from '../type/type'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false,
}

const init = () => {
   const user = JSON.parse(localStorage.getItem("user"))

    return{
        logged: !!user,
        user
    }
}

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState, init)

    const login = (name = "" ) => {
        const action = {
            type: types.login,
            payload: {
                name: name,
            }
        }

        localStorage.setItem("user", JSON.stringify(action.payload.name))

        dispatch(action)
    }

    const logout = () =>{
        localStorage.removeItem("user")
        const action = {
            type: types.logOut
        }
        dispatch()
    }

  return (
    <AuthContext.Provider value={{
        state,
        login: login,
        logout: logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
