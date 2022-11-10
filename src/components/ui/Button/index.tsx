import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPES"
import { HEIGHTS, WIDTHS } from "../../../utils/CONSTANTS"
import "./styles.css"

interface props {
    children: string | JSX.Element
    color: string
    backgroundColor: string
    borderColor?: string
    marginTop?: number | string
    marginBottom?: number | string
    onclick?: () => void
    disabled?: boolean
    type?: string
    width?: string
    height?: string
}
export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor, borderColor = null, marginTop=0, marginBottom=0, onclick = () => {}, disabled = false, type = BUTTONS_TYPES.button, width = WIDTHS.FULL, height = HEIGHTS.MD}) => {
    switch (type) {
        case BUTTONS_TYPES.submit:
            return <button type="submit" disabled={disabled} className={`Button ${(disabled) && 'Button--disabled'}`} style={{color: color, background: backgroundColor, marginTop: marginTop, marginBottom: marginBottom, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`, width: width, height: height}} onClick={onclick} >{children}</button>
        default:
            return <button className="Button" style={{color: color, background: backgroundColor, marginTop: marginTop, marginBottom: marginBottom, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`, width: width, height: height}} onClick={onclick} >{children}</button>
    }
}