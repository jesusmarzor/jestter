import { useState } from "react"
import { isEmpty } from "../utils/VALIDATIONS" 
import { MAX_STEP_LOGIN_MODAL } from "../utils/CONSTANTS"
import useSteps from "../hooks/useSteps"

const useLoginModal = () => {
    const [writingUser, setWritingUser] = useState<boolean>(false)
    const [writingPassword, setWritingPassword] = useState<boolean>(false)
    const [textUser, setTextUser] = useState<string>("")
    const [textPassword, setTextPassword] = useState<string>("")
    const { step, nextStep } = useSteps({maxStep: MAX_STEP_LOGIN_MODAL})

    const changeTextUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setTextUser(e.target.value) : setTextUser("")
    }

    const changeTextPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setTextPassword(e.target.value) : setTextPassword("")
    }

    const clickOutInput = () => {
        if (writingUser) { setWritingUser(false) }
        if (writingPassword) {setWritingPassword(false)}
    }

    return {textUser, textPassword, writingUser, writingPassword, step, nextStep, setWritingUser, setWritingPassword, changeTextUser, changeTextPassword, clickOutInput}
}

export default useLoginModal