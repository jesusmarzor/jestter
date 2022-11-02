import useInput from "../../../hooks/useInputFocus"
import "./styles.css"

interface props {
    text: string
    changeText: (e: React.ChangeEvent<HTMLInputElement>) => void
    writing: boolean
    setWriting: (value: boolean) => void
    title: string
    type: string
}

export const Input: React.FC<props> = ({title, text, type, changeText, writing, setWriting}) => {
    const {refInput, isFocus, setIsFocus} = useInput({writing})

    return(
        <div className={`Input ${(writing || isFocus || text ) && "Input--active"}`} onClick={() => !writing && setWriting(true)}>
            <p className={`Input-p ${(writing || isFocus || text) && "Input-p--active"}`}>{title}</p>
            <input ref={refInput} className="Input-input" onChange={ e => changeText(e)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type={type} value={text}/>
        </div>
    )
}