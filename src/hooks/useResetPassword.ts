import { useState } from "react"
import { login } from "../config/firebase"
import { AuthConsumer } from "../contexts/AuthContext"
import { LOGIN_ERRORS_TYPE } from "../utils/ERRORS_TYPE"

interface props {
    text: string
}

interface UseLogin {
    isLoading: boolean
    error: string
    setError: (value: string) => void
    validationUser: (e: React.FormEvent<HTMLFormElement>, t: any) => void
}

const useResetPassword = ({text}: props): UseLogin => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const { loginAuth } = AuthConsumer()

    const validationUser = (e: React.FormEvent<HTMLFormElement>, t: any) => {
        e.preventDefault()
        setIsLoading(true)
        login(text, " ")
        .then( data => {
            switch (data) {
                case LOGIN_ERRORS_TYPE.PASSWORD:
                    console.log("go to login")
                    break
                case LOGIN_ERRORS_TYPE.MANY_REQUESTS:
                    setError(t("error_login_many_request"))
                    break
                case LOGIN_ERRORS_TYPE.USER:
                    setError(t("error_login_user_not_found"))
                    break
                default:
                    setError(t("error_login_user"))
            }
            setIsLoading(false)
        })
    }

    return { isLoading, error, setError, validationUser }
}

export default useResetPassword