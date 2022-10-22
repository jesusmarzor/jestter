import BUTTONS from "../../../utils/BUTTONS"
import "./styles.css"

interface props {
    children: string | JSX.Element
    color: string
    backgroundColor: string
    borderColor?: string
    marginTop?: number
    marginBottom?: number
    onclick?: any
    type?: string
}
export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor, borderColor = null, marginTop=0, marginBottom=0, onclick = null, type = BUTTONS.button}) => {
    switch (type) {
        case BUTTONS.submit:
            return <button type="submit" className="Button" style={{color: `${color}`, background: `${backgroundColor}`, marginTop: `${marginTop}rem`, marginBottom: `${marginBottom}rem`, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`}} onClick={onclick} >{children}</button>
        default:
            return <button className="Button" style={{color: `${color}`, background: `${backgroundColor}`, marginTop: `${marginTop}rem`, marginBottom: `${marginBottom}rem`, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`}} onClick={onclick} >{children}</button>
    }
}