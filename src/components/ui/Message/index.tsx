import COLORS from "../../../utils/COLORS"
import MESSAGE from "../../../utils/Message"
import "./styles.css"

interface props {
    children: string
    type: string
    width: number
}

export const Message: React.FC<props> = ({children, type, width}) => {
    return <p className="Message" style={{ backgroundColor: `${COLORS.basicBlue}`, width: `${width}rem`}}>{children}</p>
}   