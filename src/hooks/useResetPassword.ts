import { useState } from "react"
import { resetPassword } from "../config/firebase"
import { LOGIN_ERRORS_TYPE } from "../utils/ERRORS_TYPE"

interface props {
    text: string
}

interface UseLogin {
    isLoading: boolean
    notification: string
    setNotification: (value: string) => void
    validationUser: (e: React.FormEvent<HTMLFormElement>, t: any) => void
}

const useResetPassword = ({text}: props): UseLogin => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [notification, setNotification] = useState<string>("")

    const validationUser = (e: React.FormEvent<HTMLFormElement>, t: any) => {
        e.preventDefault()
        setIsLoading(true)
        resetPassword(text)
        .then( (data: boolean) => {
            if (data) {
                setNotification(t("notification_reset_password"))
            } else {
                setNotification(t("error_login_user_not_found"))
            }
            setIsLoading(false)
        })
    }

    return { isLoading, notification, setNotification, validationUser }
}

export default useResetPassword