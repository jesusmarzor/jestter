import { useEffect } from "react"
import COLORS from "../../../utils/COLORS"
import TYPE_MESSAGE from "../../../utils/MESSAGES_TYPE"

import "./styles.css"

interface props {
    children: string
    type: string
    width: string
    setNotification: (value: string) => void
}

export const Message: React.FC<props> = ({children, type, width, setNotification}) => {
    useEffect( () => {
        setInterval( () => {
            setNotification("")
        }, 5000)
    }, [children])
    return <p className="Message" style={{ backgroundColor: `${COLORS.basicBlue}`, width: width}}>{children}</p>
}   