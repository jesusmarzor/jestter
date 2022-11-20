import { useState } from "react"
import { register, updateUser } from "../config/firebase"
import { AuthConsumer } from "../contexts/AuthContext"
import { REGISTER_ERRORS_TYPE } from "../utils/ERRORS_TYPE"
import { isEmpty, validatePassword } from "../utils/VALIDATIONS"

interface props {
    name: string
    email: string
    password: string
    confirmPassword: string
}

interface useRegister {
    isLoading: boolean
    notification: string
    setNotification: (value: string) => void
    registerUser: (e: React.FormEvent<HTMLFormElement>, t: any) => void
}

const useRegister = ({name, email, password, confirmPassword}: props): useRegister => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [notification, setNotification] = useState<string>("")

    const registerUser = (e: React.FormEvent<HTMLFormElement>, t: any) => {
        e.preventDefault()
        if (validatePassword(password, confirmPassword)) {
            setIsLoading(true)
            register(name, email, password)
            .then( async data => {
                switch ( data ) {
                    case REGISTER_ERRORS_TYPE.EMAIL_IN_USE:
                        setNotification(t("error_register_email"))
                        break
                    case REGISTER_ERRORS_TYPE.MISSING_EMAIL || REGISTER_ERRORS_TYPE.INVALID_EMAIL:
                        setNotification(t("error_login_email_invalid"))
                    case REGISTER_ERRORS_TYPE.INVALID_NAME:
                        setNotification(t("error_register_name"))
                    default:
                        setNotification(t("register_email_sent"))
                }
                setIsLoading(false)
            })
        } else {
            setNotification(t("error_register_password"))
        }
    }

    return { isLoading, notification, setNotification, registerUser }
}

export default useRegister