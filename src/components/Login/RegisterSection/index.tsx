import { useTranslation } from "react-i18next"
import COLORS from "../../../utils/COLORS"
import { Button } from "../../ui/Button"
import Separator from "../../ui/Separator"
import { FooterRegisterSection } from "./FooterRegisterSection"
import "./index.css"

export const RegisterSection = () => {
    const { t } = useTranslation()
    return(
        <section className="RegisterSection">
            <h2 className="RegisterSection-title">{t("register_section_title")}</h2>
            <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("register_section_button_google_label")}</Button>
            <Separator>{t("common_or")}</Separator>
            <Button color={COLORS.white} backgroundColor={COLORS.basicBlue}>{t("register_section_button_email_label")}</Button>
            <FooterRegisterSection/>
        </section>
    )
}