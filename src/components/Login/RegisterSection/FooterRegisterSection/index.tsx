import { useTranslation } from "react-i18next"
import COLORS from "../../../../utils/COLORS"
import "./index.css"

export const FooterRegisterSection = () => {
    const { t } = useTranslation()
    return (
        <footer className="FooterRegisterSection">
            <p className="FooterRegisterSection-p" style={{color: `${COLORS.graySecond}`}}>{t("register_section_footer")}</p>
        </footer>
    )
}