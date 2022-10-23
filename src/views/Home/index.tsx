import { AuthConsumer } from "../../contexts/AuthContext"

export const Home = () => {
    const { user } = AuthConsumer()
    return(<h1>{user.email}</h1>)    
}