import { useTranslation } from "react-i18next"
import { Modal } from "../../ui/Modal"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import Hedgehog from "../../Icons/Hedgehog"
import Separator from "../../ui/Separator"
import useLogin from "../../../hooks/useLogin"
import COLORS from "../../../utils/COLORS"
import { Loader } from "../../ui/Loader"
import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPES"
import { Message } from "../../ui/Message"
import MESSAGES_TYPE from "../../../utils/MESSAGES_TYPE"
import useInput from "../../../hooks/useInput"
import { isEmpty } from "../../../utils/VALIDATIONS"
import { ModalConsumer } from "../../../contexts/ModalContext"
import useSteps from "../../../hooks/useSteps"
import { HEIGHTS, MARGINS, MAX_STEP_LOGIN_MODAL, WIDTHS } from "../../../utils/CONSTANTS"
import INPUT_TYPES from "../../../utils/INPUT_TYPES"
import "./styles.css"

interface props {
    goToView: () => void
}

export const Login: React.FC<props> = ({ goToView }) => {
    const { text: textUser, writing: writingUser, setWriting: setWritingUser, changeText: changeTextUser, clickOutInput: clickOutInputUser } = useInput()
    const { text: textPassword, writing: writingPassword, setWriting: setWritingPassword, changeText: changeTextPassword, clickOutInput: clickOutInputPassword } = useInput()
    const { step, nextStep } = useSteps({ maxStep: MAX_STEP_LOGIN_MODAL })
    const { isLoading, error, setError, validationUser, validationPassword } = useLogin({ textUser, textPassword, nextStep, goToView })
    const { t } = useTranslation()
    const { setIsModalLogin: setIsModal, setIsModalResetPassword } = ModalConsumer()

    return (
        <>
            <Modal close={setIsModal} onclick={(step === 0) ? clickOutInputUser : clickOutInputPassword}>
                <Hedgehog width={WIDTHS.MD_EXT} height={HEIGHTS.MD_EXT} fill={COLORS.basicBlue} />
                <section className="Login">
                    <h2 className="Login-title">{t("login_modal_title")}</h2>
                    <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
                    <Separator>{t("common_or")}</Separator>
                    <form onSubmit={e => (step === 0) ? validationUser(e, t) : validationPassword(e, t)}>
                        {
                            (step === 0)
                                ?
                                <>
                                    <Input type={INPUT_TYPES.TEXT} title={t("login_modal_phone_email_or_username_placeholder")} text={textUser} changeText={changeTextUser} writing={writingUser} setWriting={setWritingUser} />
                                    <Button type={BUTTONS_TYPES.submit} marginTop={MARGINS.MD} marginBottom={MARGINS.MD} disabled={!isEmpty(error)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                                        {
                                            (isLoading)
                                                ?
                                                <Loader width={WIDTHS.XS} height={HEIGHTS.XS} color={COLORS.basicBlue} />
                                                :
                                                t("common_next")
                                        }
                                    </Button>
                                </>
                                :
                                <>
                                    <Input type={INPUT_TYPES.PASSWORD} title={t('common_password')} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword} />
                                    <Button type={BUTTONS_TYPES.submit} marginTop={MARGINS.MD} marginBottom={MARGINS.MD} disabled={!isEmpty(error)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
                                </>
                        }
                    </form>
                    <Button onclick={() => setIsModalResetPassword(true)} color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("common_forgot_password")}</Button>
                    <footer className="Login-footer">
                        <p>{t("login_modal_footer")}</p>
                    </footer>
                </section>
            </Modal>
            {
                (!isEmpty(error)) && <Message type={MESSAGES_TYPE.error} width={WIDTHS.XL2} setError={setError}>{error}</Message>
            }
        </>
    )
}