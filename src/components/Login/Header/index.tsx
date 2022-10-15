import Hedgehog from "../../Icons/Hedgehog"
import COLORS from "../../../utils/COLORS"
import "./index.css"

export const Header = () => {
    return(
        <header className="Header">
            <Hedgehog width={60} height={60} fill={COLORS.basicBlue}/>
            <h1 className="Header-title">Happening now</h1>
        </header>
    )
}