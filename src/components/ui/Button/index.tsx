import "./index.css"

interface props {
    children: string,
    color: string,
    backgroundColor: string
    borderColor?: string

}
export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor, borderColor = null}) => {
    return(
        <button className="Button" style={{color: `${color}`, background: `${backgroundColor}`, border: `${borderColor ? `.1rem solid ${borderColor}`: "inherit"}`}} >{children}</button>
    )
}