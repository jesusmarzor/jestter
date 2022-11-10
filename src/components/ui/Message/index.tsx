import { useEffect } from "react"
import COLORS from "../../../utils/COLORS"
import TYPE_MESSAGE from "../../../utils/MESSAGES_TYPE"

import "./styles.css"

interface props {
    children: string
    type: string
    width: string
    setError: (value: string) => void
}

export const Message: React.FC<props> = ({children, type, width, setError}) => {
    useEffect( () => {
        setInterval( () => {
            setError("")
        }, 5000)
    }, [children])
    return <p className="Message" style={{ backgroundColor: `${COLORS.basicBlue}`, width: width}}>{children}</p>
}   