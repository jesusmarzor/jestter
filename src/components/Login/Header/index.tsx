import Hedgehog from "../../Icons/Hedgehog"
import COLORS from "../../../utils/COLORS"
import "./styles.css"
import { useTranslation } from "react-i18next"

export const Header = () => {
    const { t } = useTranslation()
    return(
        <header className="Header">
            <Hedgehog width={60} height={60} fill={COLORS.basicBlue}/>
            <h1 className="Header-title">{t("login_title")}</h1>
        </header>
    )
}