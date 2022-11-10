import { useEffect, useState } from "react"

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)

    const loginAuth = (user: User) => setUser(user)

    const registerAuth = (user: User) => {}

    return {user, loginAuth}
}