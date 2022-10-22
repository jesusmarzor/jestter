import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { isEmpty } from "../../../utils/VALIDATIONS"
import "./index.css"

interface props {
    writing: any,
    setWriting: any
}

export const InputLogin: React.FC<props> = ({writing, setWriting}) => {
    
    const refInput = useRef(null)
    const [isFocus, setIsFocus] = useState(false)
    const [text, setText] = useState("")
    const { t } = useTranslation()

    useEffect( () => {
        writing ? refInput.current.focus() : refInput.current.blur() 
        if (!writing && isEmpty(text)) { refInput.current.value = null }
    }, [writing])

    const changeText = (e: any) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setText(e.target.value) : setText("")
    }

    return(
        <div className={`InputLogin ${(writing || isFocus || text ) && "InputLogin--active"}`} onClick={() => !writing && setWriting(true)}>
            <p className={`InputLogin-p ${(writing || isFocus || text) && "InputLogin-p--active"}`}>{t("login_modal_phone_email_or_username_placeholder")}</p>
            <input ref={refInput} className="InputLogin-input" onChange={ e => changeText(e)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type="text"/>
        </div>
    )
}