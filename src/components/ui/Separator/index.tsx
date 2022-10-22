import "./styles.css"

interface props {
    children: string,
}
const Separator: React.FC<props> = ({children}) => {
    return(
        <p className="Separator">
            <span className="Separator-line"></span>
            {children}
            <span className="Separator-line"></span>
        </p>
    )
}

export default Separator