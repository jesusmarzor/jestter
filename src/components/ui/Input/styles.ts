import { COLORS } from "../../../utils/THEME"
import styled from "styled-components"

interface styledInputProps {
    width?: string
    actived: boolean
}

interface styledInputParagraphProps{
    actived: boolean
}

export const StyledInput = styled.div<styledInputProps>`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 3.8rem;
    border-radius: .3rem;
    padding: .5rem;
    width: ${ ({width}) => width };
    border: .1rem solid ${ ({actived}) => (actived) ? COLORS.basicBlue: COLORS.gray };
`

export const StyledInputParagraph = styled.p<styledInputParagraphProps>`
    font-size: ${({actived}) => (actived) ? ".8rem" : "1rem"};
    color: ${({actived}) => (actived) ? COLORS.basicBlue : COLORS.graySecond};
    transform: translateY(${({actived}) => (actived) ? "0rem" : ".7rem"});
    transition: font-size 100ms ease, color 100ms ease, transform 100ms ease;
`

export const StyledInputText = styled.input`
    border: none;
    outline: none;
    height: 2rem;
    pointer-events: none;
    font-size: 1.1rem;
`