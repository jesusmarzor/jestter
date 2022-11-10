import "./styles.css"

interface props {
    width: string
    height: string
    color: string
}

export const Loader: React.FC<props> = ({width, height, color}) => {
    return <div className="Loader" style={{width: width, height: height, borderBottomColor: `${color}`}}></div>
}