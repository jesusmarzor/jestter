import { useState } from "react"
import { isEmpty } from "../utils/VALIDATIONS" 
import { MAX_STEP_LOGIN_MODAL } from "../utils/CONSTANTS"
import useSteps from "../hooks/useSteps"

const useLoginModal = () => {
    const [writingUser, setWritingUser] = useState(false)
    const [writingPassword, setWritingPassword] = useState(false)
    const [textUser, setTextUser] = useState("")
    const [textPassword, setTextPassword] = useState("")
    const { step, nextStep } = useSteps({maxStep: MAX_STEP_LOGIN_MODAL})
    const [isLoading, setIsLoading] = useState(false)

    const changeTextUser = (e: any) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setTextUser(e.target.value) : setTextUser("")
    }

    const changeTextPassword = (e: any) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setTextPassword(e.target.value) : setTextPassword("")
    }

    const clickOutInput = () => {
        if (writingUser) { setWritingUser(false) }
        if (writingPassword) {setWritingPassword(false)}
    }

    return {textUser, textPassword, writingUser, writingPassword, step, nextStep, isLoading, setWritingUser, setWritingPassword, changeTextUser, changeTextPassword, clickOutInput}
}

export default useLoginModal