import styled from "styled-components"
import "./styles.css"

interface props {
    width: string
    height: string
    color: string
}

const StyledLoader = styled.div<props>`
    width: ${({width}) => width};
    height: ${({height}) => height};
    border-bottom-color: ${({color}) => color};
`

export const Loader: React.FC<props> = ({width, height, color}) => {
    return <StyledLoader className="Loader" width={width} height={height} color={color}></StyledLoader>
}