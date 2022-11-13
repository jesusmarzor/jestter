import { useTranslation } from "react-i18next"
import { ModalConsumer } from "../../../contexts/ModalContext"
import { HEIGHTS, WIDTHS, COLORS } from "../../../utils/THEME"
import { Button } from "../../ui/Button"
import Separator from "../../ui/Separator"
import { FooterRegisterSection } from "./FooterRegisterSection"
import "./styles.css"

export const RegisterSection = () => {
    const { t } = useTranslation()
    const { setIsModalRegister } = ModalConsumer()
    return(
        <section className="RegisterSection">
            <h2 className="RegisterSection-title">{t("register_section_title")}</h2>
            <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray} width={WIDTHS.XL} height={HEIGHTS.SM}>{t("register_section_button_google_label")}</Button>
            <Separator>{t("common_or")}</Separator>
            <Button onclick={() => setIsModalRegister(true)} color={COLORS.white} backgroundColor={COLORS.basicBlue} width={WIDTHS.XL} height={HEIGHTS.SM}>{t("register_section_button_email_label")}</Button>
            <FooterRegisterSection/>
        </section>
    )
}