import { useState } from "react"
import { isEmpty } from "../utils/VALIDATIONS" 

const useLogin = () => {
    const [writingUser, setWritingUser] = useState(false)
    const [writingPassword, setWritingPassword] = useState(false)
    const [textUser, setTextUser] = useState("")
    const [textPassword, setTextPassword] = useState("")

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

    return {textUser, textPassword, writingUser, writingPassword, setWritingUser, setWritingPassword, changeTextUser, changeTextPassword, clickOutInput}
}

export default useLogin