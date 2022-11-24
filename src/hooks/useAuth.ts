import { useState } from "react"
import { loginWithGithub, logout } from "../config/firebase"

export const useAuth = () => {
    const [user, setUser] = useState<UserJestter | null>(null)

    const loginAuth = (user: UserJestter, goToView: () => void) => {
        setUser(user)
        goToView()
    }

    const loginAuthWithGithub = async (goToView: () => void) => {
        const user = await loginWithGithub()
        loginAuth(user, goToView)
    }

    const logoutAuth = () => {
        setUser(null)
        logout()
    }

    return {user, loginAuth, loginAuthWithGithub, logoutAuth}
}