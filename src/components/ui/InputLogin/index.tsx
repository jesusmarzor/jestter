import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import useInputLogin from "../../../hooks/useInputLogin"
import "./styles.css"

interface props {
    text: string
    changeText: (e: React.ChangeEvent<HTMLInputElement>) => void
    writing: boolean
    setWriting: (value: boolean) => void
    title: string
}

export const InputLogin: React.FC<props> = ({title, text, changeText, writing, setWriting}) => {
    const {refInput, isFocus, setIsFocus} = useInputLogin({writing})

    return(
        <div className={`InputLogin ${(writing || isFocus || text ) && "InputLogin--active"}`} onClick={() => !writing && setWriting(true)}>
            <p className={`InputLogin-p ${(writing || isFocus || text) && "InputLogin-p--active"}`}>{title}</p>
            <input ref={refInput} className="InputLogin-input" onChange={ e => changeText(e)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type="text" value={text}/>
        </div>
    )
}