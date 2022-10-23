import { Navigate, useLocation } from "react-router-dom"
import { AuthConsumer } from "../../contexts/AuthContext"
import { LOCATION_LOGIN } from "../../utils/CONSTANTS"

interface props {
    children: JSX.Element
}

export const RequireAuth = ({ children }: props) => {
    const location = useLocation()
    const { user } = AuthConsumer()
    return ( user ) ? children : <Navigate to={ LOCATION_LOGIN } state={ location }/>
}