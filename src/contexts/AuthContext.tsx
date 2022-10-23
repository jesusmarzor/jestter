import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

interface props {
    children: JSX.Element
}

const authContext = createContext<any>(null);

export const AuthProvider = ({children}: props) => {
    const auth = useAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const AuthConsumer = () => {
    const context: any | null = useContext(authContext)
    return context
}