import { useTranslation } from "react-i18next"
import { Modal } from "../ui/Modal"
import { Button } from "../ui/Button"
import { InputLogin } from "../ui/InputLogin"
import Hedgehog from "../Icons/Hedgehog"
import Separator from "../ui/Separator"
import useLogin from "../../hooks/useLogin"
import COLORS from "../../utils/COLORS"
import { Loader } from "../ui/Loader"
import BUTTONS_TYPE from "../../utils/BUTTONS_TYPE"
import { Message } from "../ui/Message"
import MESSAGES_TYPE from "../../utils/MESSAGES_TYPE"
import { isEmpty } from "../../utils/VALIDATIONS"
import useLoginModal from "../../hooks/useLoginModal"
import "./styles.css"
import { ModalConsumer } from "../../contexts/ModalContext"

interface props {
    goToView: () => void
}

export const LoginModal: React.FC<props> = ({goToView}) => {
    const { textUser, textPassword, writingUser, writingPassword, step, nextStep, changeTextUser, changeTextPassword, setWritingUser, setWritingPassword, clickOutInput } = useLoginModal()
    const {isLoading, error, setError, validationUser, validationPassword} = useLogin({textUser, textPassword, nextStep, goToView})
    const { t } = useTranslation()
    const { setIsModalLogin: setIsModal } = ModalConsumer()
    return(
        <>
        <Modal close={setIsModal} onclick={clickOutInput}>
            <Hedgehog width={50} height={50} fill={COLORS.basicBlue}/>
            <section className="LoginModal">
                <h2 className="LoginModal-title">{t("login_modal_title")}</h2>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
                <Separator>{t("common_or")}</Separator>
                <form onSubmit={ e => (step === 0) ? validationUser(e, t) : validationPassword(e, t) }>
                { 
                    (step === 0)
                    ?
                    <>
                        <InputLogin type="text" title={t("login_modal_phone_email_or_username_placeholder")} text={textUser} changeText={changeTextUser} writing={writingUser} setWriting={setWritingUser}/>
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
                        <InputLogin type="password" title={"Password"} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword}/> 
                        <Button type={BUTTONS_TYPE.submit} marginTop={1.5} marginBottom={1.5} disabled={!isEmpty(error)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
                    </>
                }
                </form>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("common_forgot_password")}</Button>
                <footer className="LoginModal-footer">
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