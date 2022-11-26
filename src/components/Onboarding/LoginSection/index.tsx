import { Button } from "../../ui/Button"
import { useTranslation } from "react-i18next"
import { ModalConsumer } from "../../../contexts/ModalContext"
import { HEIGHTS, WIDTHS, COLORS } from "../../../utils/THEME"
import "./styles.css"

export const LoginSection = () => {
    const { t } = useTranslation()
    const { setIsModalLogin: setIsModal } = ModalConsumer()
    return(
        <section className="LoginSection">
            <h2 className="LoginSection-title">{t("onboarding.login.title")}</h2>
            <Button onclick={() => setIsModal(true)} color={COLORS.basicBlue} backgroundColor={COLORS.white} borderColor={COLORS.gray} width={WIDTHS.XL} height={HEIGHTS.SM}>{t("common.sign_in")}</Button>
        </section>
    )
}