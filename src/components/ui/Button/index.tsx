import BUTTONS_TYPE from "../../../utils/BUTTONS_TYPE"
import "./styles.css"

interface props {
    children: string | JSX.Element
    color: string
    backgroundColor: string
    borderColor?: string
    marginTop?: number
    marginBottom?: number
    onclick?: any
    disabled?: boolean
    type?: string
}
export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor, borderColor = null, marginTop=0, marginBottom=0, onclick = null, disabled = false, type = BUTTONS_TYPE.button}) => {
    switch (type) {
        case BUTTONS_TYPE.submit:
            return <button type="submit" disabled={disabled} className={`Button ${(disabled) && 'Button--disabled'}`} style={{color: `${color}`, background: `${backgroundColor}`, marginTop: `${marginTop}rem`, marginBottom: `${marginBottom}rem`, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`}} onClick={onclick} >{children}</button>
        default:
            return <button className="Button" style={{color: `${color}`, background: `${backgroundColor}`, marginTop: `${marginTop}rem`, marginBottom: `${marginBottom}rem`, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`}} onClick={onclick} >{children}</button>
    }
}