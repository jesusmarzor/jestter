import { useState } from "react"
import { login } from "../config/firebase"
import { AuthConsumer } from "../contexts/AuthContext"
import { LOGIN_ERRORS_TYPE } from "../utils/ERRORS_TYPE"

interface props {
    textUser: string
    textPassword: string
    nextStep: () => void
    goToView: () => void
}

interface UseLogin {
    isLoading: boolean
    notification: string
    setNotification: (value: string) => void
    validationUser: (e: React.FormEvent<HTMLFormElement>, t: any) => void
    validationPassword: (e: React.FormEvent<HTMLFormElement>, t: any) => void
}

const useLogin = ({textUser, textPassword, nextStep, goToView}: props): UseLogin => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [notification, setNotification] = useState<string>("")
    const { loginAuth } = AuthConsumer()

    const validationUser = (e: React.FormEvent<HTMLFormElement>, t: any) => {
        e.preventDefault()
        setIsLoading(true)
        login(textUser, " ")
        .then( data => {
            switch (data) {
                case LOGIN_ERRORS_TYPE.PASSWORD:
                    nextStep()
                    break
                case LOGIN_ERRORS_TYPE.MANY_REQUESTS:
                    setNotification(t("error_login_many_request"))
                    break
                case LOGIN_ERRORS_TYPE.USER:
                    setNotification(t("error_login_user_not_found"))
                    break
                case LOGIN_ERRORS_TYPE.INVALID_EMAIL:
                    setNotification(t("error_login_email_invalid"))
                    break
                default:
                    setNotification(t("error_login_user"))
            }
            setIsLoading(false)
        })
    }

    const validationPassword = (e: React.FormEvent<HTMLFormElement>, t: any) => {
        e.preventDefault()
        setIsLoading(true)
        login(textUser, textPassword)
        .then( data => {
            switch (data) {
                case LOGIN_ERRORS_TYPE.PASSWORD:
                    setNotification(t("error_login_password"))
                    break
                case LOGIN_ERRORS_TYPE.MANY_REQUESTS:
                    setNotification(t("error_login_many_request"))
                    break
                case LOGIN_ERRORS_TYPE.INTERNAL:
                    setNotification(t("error_login_password"))
                    break
                case LOGIN_ERRORS_TYPE.NOT_VERIFIED:
                    setNotification(t("error_login_not_verified"))
                    break
                default:
                    loginAuth(data, goToView)
            }
            setIsLoading(false)
        })
    }

    return { isLoading, notification, setNotification, validationUser, validationPassword }
}

export default useLogin