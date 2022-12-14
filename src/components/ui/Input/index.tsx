import useInput from "../../../hooks/useInputFocus"
import { MARGINS, WIDTHS } from "../../../utils/THEME"
import { isEmpty } from "../../../utils/VALIDATIONS"
import { StyledInput, StyledInputParagraph, StyledInputText } from "./styles"

interface props {
    text: string
    changeText: (e: React.ChangeEvent<HTMLInputElement>) => void
    writing: boolean
    setWriting: (value: boolean) => void
    title: string
    type: string
    width?: string
    marginY?: string
}

export const Input: React.FC<props> = ({title, text, type, changeText, writing, setWriting, width = WIDTHS.FULL, marginY = MARGINS.ZERO}) => {
    const {refInput, isFocus, setIsFocus} = useInput({writing})

    return(
        <StyledInput actived={(writing || isFocus || !isEmpty(text))} width={width} marginY={marginY} onClick={() => !writing && setWriting(true)}>
            <StyledInputParagraph actived={(writing || isFocus || !isEmpty(text))}>{title}</StyledInputParagraph>
            <StyledInputText ref={refInput} onChange={ e => changeText(e)} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type={type} value={text}/>
        </StyledInput>
    )
}