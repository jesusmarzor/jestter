import "./styles.css"

interface props {
    width: number
    height: number
    color: string
}

export const Loader: React.FC<props> = ({width, height, color}) => {
    return <div className="Loader" style={{width: `${width}rem`, height: `${height}rem`, borderBottomColor: `${color}`}}></div>
}