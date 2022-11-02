import { useTranslation } from "react-i18next"
import { Modal } from "../../ui/Modal"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import Hedgehog from "../../Icons/Hedgehog"
import Separator from "../../ui/Separator"
import useOnboarding from "../../../hooks/useOnboarding"
import COLORS from "../../../utils/COLORS"
import { Loader } from "../../ui/Loader"
import BUTTONS_TYPE from "../../../utils/BUTTONS_TYPE"
import { Message } from "../../ui/Message"
import MESSAGES_TYPE from "../../../utils/MESSAGES_TYPE"
import { isEmpty } from "../../../utils/VALIDATIONS"
import useLogin from "../../../hooks/useInput"
import "./styles.css"
import { ModalConsumer } from "../../../contexts/ModalContext"
import useSteps from "../../../hooks/useSteps"
import { MAX_STEP_LOGIN_MODAL } from "../../../utils/CONSTANTS"
import useInput from "../../../hooks/useInput"

interface props {
    goToView: () => void
}

export const Login: React.FC<props> = ({goToView}) => {
    const {text: textUser, writing: writingUser, setWriting: setWritingUser, changeText: changeTextUser, clickOutInput: clickOutInputUser} = useInput()
    const {text: textPassword, writing: writingPassword, setWriting: setWritingPassword, changeText: changeTextPassword, clickOutInput: clickOutInputPassword} = useInput()
    const { step, nextStep } = useSteps({maxStep: MAX_STEP_LOGIN_MODAL})
    const {isLoading, error, setError, validationUser, validationPassword} = useOnboarding({textUser, textPassword, nextStep, goToView})
    const { t } = useTranslation()
    const { setIsModalLogin: setIsModal } = ModalConsumer()
    
    return(
        <>
        <Modal close={setIsModal} onclick={(step === 0) ? clickOutInputUser : clickOutInputPassword}>
            <Hedgehog width={50} height={50} fill={COLORS.basicBlue}/>
            <section className="Login">
                <h2 className="Login-title">{t("login_modal_title")}</h2>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
                <Separator>{t("common_or")}</Separator>
                <form onSubmit={ e => (step === 0) ? validationUser(e, t) : validationPassword(e, t) }>
                { 
                    (step === 0)
                    ?
                    <>
                        <Input type="text" title={t("login_modal_phone_email_or_username_placeholder")} text={textUser} changeText={changeTextUser} writing={writingUser} setWriting={setWritingUser}/>
                        <Button type={BUTTONS_TYPE.submit} marginTop={1.5} marginBottom={1.5} disabled={!isEmpty(error)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                            {
                                (isLoading)
                                ? 
                                <Loader width={1.2} height={1.2} color={COLORS.basicBlue}/>
                                :
                                t("common_next")
                            }
                        </Button>
                    </>
                    :
                    <>
                        <Input type="password" title={"Password"} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword}/> 
                        <Button type={BUTTONS_TYPE.submit} marginTop={1.5} marginBottom={1.5} disabled={!isEmpty(error)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
                    </>
                }
                </form>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("common_forgot_password")}</Button>
                <footer className="Login-footer">
                    <p>{t("login_modal_footer")}</p>
                </footer>
            </section>
        </Modal>
        {
            (!isEmpty(error)) && <Message type={MESSAGES_TYPE.error} width={20} setError={setError}>{error}</Message>
        }
        </>
    )
}