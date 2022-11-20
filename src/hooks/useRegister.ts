import { useState } from "react"
import { register } from "../config/firebase"
import { REGISTER_ERRORS_TYPE } from "../utils/ERRORS_TYPE"
import { validatePassword } from "../utils/VALIDATIONS"

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
            register(email, password)
            .then( data => {
                switch ( data ) {
                    case REGISTER_ERRORS_TYPE.EMAIL_IN_USE:
                        setNotification(t("error_register_email"))
                        break
                    case REGISTER_ERRORS_TYPE.MISSING_EMAIL || REGISTER_ERRORS_TYPE.INVALID_EMAIL:
                        setNotification(t("error_login_email_invalid"))
                    default:
                        // SAVE NAME USER, SAVE USER IN CONTEXT AND REDIRECT LOGIN
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