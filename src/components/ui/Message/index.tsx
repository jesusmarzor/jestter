import { useEffect } from "react"
import TYPE_MESSAGE from "../../../utils/MESSAGES_TYPE"
import { StyledMessage, styledMessageProps } from "./styles"

interface props extends styledMessageProps{
    children: string
    type: string
    setNotification: (value: string) => void
}

export const Message: React.FC<props> = ({children, type, width, setNotification}) => {
    useEffect( () => {
        setInterval( () => {
            setNotification("")
        }, 5000)
    }, [children])
    return <StyledMessage width={width}>{children}</StyledMessage>
}   