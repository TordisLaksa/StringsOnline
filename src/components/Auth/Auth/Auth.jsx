import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [children]);

    return (
        <AuthContext.Provider value={{ loginData, setLoginData }}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom auth hook 
export const useAuth = () => useContext(AuthContext)
