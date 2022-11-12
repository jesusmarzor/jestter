import styled from "styled-components"
import { COLORS } from "../../../utils/THEME"

export interface styledMessageProps {
    width: string
}

export const StyledMessage = styled.p<styledMessageProps>`
    z-index: 2;
    position: fixed;
    bottom: 1rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1rem;
    color: ${COLORS.white};
    text-align: center;
    border-radius: .2rem;
    background-color: ${COLORS.basicBlue};
    width: ${ ({width}) => width};
`