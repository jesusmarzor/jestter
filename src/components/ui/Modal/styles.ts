import styled from "styled-components"

export interface styledModalProps {
    backgroundColor?: string
}

export const StyledModal = styled.div<styledModalProps>`
    background-color: ${({backgroundColor}) => backgroundColor}
`