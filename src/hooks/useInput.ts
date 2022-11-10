import { useState } from "react"
import { isEmpty } from "../utils/VALIDATIONS" 

const useInput = () => {
    const [writing, setWriting] = useState<boolean>(false)
    const [text, setText] = useState<string>("")

    const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setText(e.target.value) : setText("")
    }

    const clickOutInput = () => {
        writing && setWriting(false)
    }

    return {text, writing, setWriting, changeText, clickOutInput}
}

export default useInput