import styled from "styled-components"
import { COLORS } from "../../../utils/THEME"

export interface styledButtonProps {
    color: string
    backgroundColor: string
    borderColor?: string
    marginTop?: number | string
    marginBottom?: number | string
    width?: string
    height?: string
}

export const StyledButton = styled.button<styledButtonProps>`
    color: ${ ({color}) => color };
    background-color: ${ ({backgroundColor}) => backgroundColor };
    border-color: ${ ({borderColor}) => borderColor};
    margin-top: ${ ({marginTop}) => marginTop};
    margin-bottom: ${ ({marginBottom}) => marginBottom};
    width: ${ ({width}) => width};
    height: ${ ({height}) => height};
    
    &:hover {
        box-shadow: 0 1rem 0 1.5rem ${COLORS.grayHover} inset;
    }
`