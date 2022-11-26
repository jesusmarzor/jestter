import { Trans, useTranslation } from "react-i18next"
import { Modal } from "../../ui/Modal"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import Hedgehog from "../../Icons/Hedgehog"
import Separator from "../../ui/Separator"
import useLogin from "../../../hooks/useLogin"
import { Loader } from "../../ui/Loader"
import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPES"
import { Message } from "../../ui/Message"
import MESSAGES_TYPE from "../../../utils/MESSAGES_TYPE"
import useInput from "../../../hooks/useInput"
import { isEmpty } from "../../../utils/VALIDATIONS"
import { ModalConsumer } from "../../../contexts/ModalContext"
import useSteps from "../../../hooks/useSteps"
import { APP_NAME, MAX_STEP_LOGIN_MODAL } from "../../../utils/CONSTANTS"
import { COLORS, HEIGHTS, MARGINS, WIDTHS } from "../../../utils/THEME"
import INPUT_TYPES from "../../../utils/INPUT_TYPES"
import "./styles.css"
import { AuthConsumer } from "../../../contexts/AuthContext"
import styled from "styled-components"

const LinkButton = styled.button`
    color: ${COLORS.basicBlue};
    background-color: ${COLORS.empty};
    outline: none;
    border: none;
    cursor: pointer;
`

interface props {
    goToView: () => void
}

export const Login: React.FC<props> = ({ goToView }) => {
    const { text: textUser, writing: writingUser, setWriting: setWritingUser, changeText: changeTextUser, clickOutInput: clickOutInputUser } = useInput()
    const { text: textPassword, writing: writingPassword, setWriting: setWritingPassword, changeText: changeTextPassword, clickOutInput: clickOutInputPassword } = useInput()
    const { step, nextStep } = useSteps({ maxStep: MAX_STEP_LOGIN_MODAL })
    const { isLoading, notification, setNotification, validationUser, validationPassword, goToRegisterModal } = useLogin({ textUser, textPassword, nextStep, goToView })
    const { t } = useTranslation()
    const { setIsModalLogin: setIsModal, setIsModalResetPassword } = ModalConsumer()
    const { loginAuthWithGithub } = AuthConsumer()

    return (
        <>
            <Modal close={setIsModal} onclick={(step === 0) ? clickOutInputUser : clickOutInputPassword}>
                <Hedgehog width={WIDTHS.MD_EXT} height={HEIGHTS.MD_EXT} fill={COLORS.basicBlue} />
                <section className="Login">
                    <h2 className="Login-title">{t("modal.login.title", {appName: APP_NAME})}</h2>
                    <Button onclick={() => loginAuthWithGithub(goToView)} color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("modal.login.button", {technology: "Github"})}</Button>
                    <Separator>{t("common.or")}</Separator>
                    <form onSubmit={e => (step === 0) ? validationUser(e, t) : validationPassword(e, t)}>
                        {
                            (step === 0)
                                ?
                                <>
                                    <Input type={INPUT_TYPES.TEXT} title={t("common.email")} text={textUser} changeText={changeTextUser} writing={writingUser} setWriting={setWritingUser} />
                                    <Button type={BUTTONS_TYPES.submit} marginTop={MARGINS.MD} marginBottom={MARGINS.MD} disabled={!isEmpty(notification)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                                        {
                                            (isLoading)
                                                ?
                                                <Loader width={WIDTHS.XS} height={HEIGHTS.XS} color={COLORS.basicBlue} />
                                                :
                                                t("common.next")
                                        }
                                    </Button>
                                </>
                                :
                                <>
                                    <Input type={INPUT_TYPES.PASSWORD} title={t('common.password')} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword} />
                                    <Button type={BUTTONS_TYPES.submit} marginTop={MARGINS.MD} marginBottom={MARGINS.MD} disabled={!isEmpty(notification)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("common.sign_in")}</Button>
                                </>
                        }
                    </form>
                    <Button onclick={() => setIsModalResetPassword(true)} color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("common.forgot_password")}</Button>
                    <footer className="Login-footer">
                        <Trans i18nKey={"modal.login.footer"}>
                            <LinkButton onClick={() => goToRegisterModal()}></LinkButton >
                        </Trans>
                    </footer>
                </section>
            </Modal>
            {
                (!isEmpty(notification)) && <Message type={MESSAGES_TYPE.error} width={WIDTHS.XL2} setNotification={setNotification}>{notification}</Message>
            }
        </>
    )
}