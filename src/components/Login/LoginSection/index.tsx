import { Button } from "../../ui/Button"
import COLORS from "../../../utils/COLORS"
import { useTranslation } from "react-i18next"
import { ModalConsumer } from "../../../contexts/ModalContext"
import "./styles.css"

export const LoginSection = () => {
    const { t } = useTranslation()
    const { setIsModalLogin: setIsModal } = ModalConsumer()
    return(
        <section className="LoginSection">
            <h2 className="LoginSection-title">{t("login_section_title")}</h2>
            <Button onclick={() => setIsModal(true)} color={COLORS.basicBlue} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
        </section>
    )
}