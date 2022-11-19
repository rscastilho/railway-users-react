import { createContext, useMemo, useState } from 'react'
import webApi from '../api/webApi';


export const AuthContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [authenticate, setAuthenticate] = useState(false)

    useMemo(() => {
        const authenticado = localStorage.getItem('@token')
        if (authenticado) {
            webApi.defaults.headers.authorization = `bearer ${authenticado}`
            setAuthenticate(true)
        } else {
            setAuthenticate(false)
            localStorage.clear()
        }
    }, [])
    
    
    
    return (
        <>
            <AuthContext.Provider value={{ authenticate, setAuthenticate }}>
                {children}
            </AuthContext.Provider>

        </>
    )
}
