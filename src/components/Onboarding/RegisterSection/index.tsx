import { useTranslation } from "react-i18next"
import { AuthConsumer } from "../../../contexts/AuthContext"
import { ModalConsumer } from "../../../contexts/ModalContext"
import { APP_NAME } from "../../../utils/CONSTANTS"
import { HEIGHTS, WIDTHS, COLORS } from "../../../utils/THEME"
import { Button } from "../../ui/Button"
import Separator from "../../ui/Separator"
import { FooterRegisterSection } from "./FooterRegisterSection"
import "./styles.css"

interface props {
    goToView: () => void
}

export const RegisterSection: React.FC<props> = ({ goToView }) => {
    const { t } = useTranslation()
    const { loginAuthWithGithub } = AuthConsumer()
    const { setIsModalRegister } = ModalConsumer()

    return(
        <section className="RegisterSection">
            <h2 className="RegisterSection-title">{t("onboarding.register.title", {appName: APP_NAME})}</h2>
            <Button onclick={() => loginAuthWithGithub(goToView)} color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray} width={WIDTHS.XL} height={HEIGHTS.SM}>{t("onboarding.register.button", {technology: "Github"})}</Button>
            <Separator>{t("common.or")}</Separator>
            <Button onclick={() => setIsModalRegister(true)} color={COLORS.white} backgroundColor={COLORS.basicBlue} width={WIDTHS.XL} height={HEIGHTS.SM}>{t("onboarding.register.button", {technology: "email"})}</Button>
            <FooterRegisterSection/>
        </section>
    )
}