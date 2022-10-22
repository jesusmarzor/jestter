import { Button } from "../../ui/Button"
import COLORS from "../../../utils/COLORS"
import "./styles.css"
import { useTranslation } from "react-i18next"

export const LoginSection = () => {
    const { t } = useTranslation()
    return(
        <section className="LoginSection">
            <h2 className="LoginSection-title">{t("login_section_title")}</h2>
            <Button color={COLORS.basicBlue} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
        </section>
    )
}