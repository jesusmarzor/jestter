import "./styles.css"

interface props {
    children: string | JSX.Element,
    color: string,
    backgroundColor: string
    borderColor?: string
    onclick?: any
}
export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor, borderColor = null, onclick = null}) => {
    return(
        <button className="Button" style={{color: `${color}`, background: `${backgroundColor}`, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`}} onClick={onclick} >{children}</button>
    )
}