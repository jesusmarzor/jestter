import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "./index.css"

interface props {
    writing: any,
    setWriting: any
}

export const InputLogin: React.FC<props> = ({writing, setWriting}) => {
    
    const refInput = useRef(null)
    const [isFocus, setIsFocus] = useState(false)
    const { t } = useTranslation()

    useEffect( () => {
        writing ? refInput.current.focus() : refInput.current.blur()
    }, [writing])

    return(
        <div className={`InputLogin ${(writing || isFocus) && "InputLogin--active"}`} onClick={() => !writing && setWriting(true)}>
            <p className={`InputLogin-p ${(writing || isFocus) && "InputLogin-p--active"}`}>{t("login_modal_phone_email_or_username_placeholder")}</p>
            <input ref={refInput} className="InputLogin-input" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type="text"/>
        </div>
    )
}