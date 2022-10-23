import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

interface props {
    children: JSX.Element
}

const authContext = createContext<any>(null);

export const AuthProvider: React.FC<props> = ({children}) => {
    const auth = useAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const AuthConsumer = () => {
    const context: any = useContext(authContext)
    return context
}