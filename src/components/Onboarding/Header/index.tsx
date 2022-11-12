import Hedgehog from "../../Icons/Hedgehog"
import "./styles.css"
import { useTranslation } from "react-i18next"
import { HEIGHTS, WIDTHS, COLORS } from "../../../utils/THEME"

export const Header = () => {
    const { t } = useTranslation()
    return(
        <header className="Header">
            <Hedgehog width={WIDTHS.MD_EXT2} height={HEIGHTS.MD_EXT2} fill={COLORS.basicBlue}/>
            <h1 className="Header-title">{t("onboarding_title")}</h1>
        </header>
    )
}