import { useTranslation } from "react-i18next"
import { Modal } from "../ui/Modal"
import { Button } from "../ui/Button"
import { InputLogin } from "../ui/InputLogin"
import Hedgehog from "../Icons/Hedgehog"
import Separator from "../ui/Separator"
import useSteps from "../../hooks/useSteps"
import useLogin from "../../hooks/useLogin"
import { MAX_STEP_LOGIN_MODAL } from "../../utils/CONSTANTS"
import COLORS from "../../utils/COLORS"
import "./styles.css"
import { login } from "../../config/firebase"
import { LOGIN_ERRORS } from "../../utils/ERRORS"
import { useState } from "react"
import { Loader } from "../ui/Loader"
import BUTTONS from "../../utils/BUTTONS"
import { Message } from "../ui/Message"
import MESSAGE from "../../utils/Message"
import { isEmpty } from "../../utils/VALIDATIONS"

export const LoginModal = () => {
    const { textUser, textPassword, writingUser, writingPassword, changeTextUser, changeTextPassword, setWritingUser, setWritingPassword, clickOutInput } = useLogin()
    const { step, nextStep } = useSteps({maxStep: MAX_STEP_LOGIN_MODAL})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const { t } = useTranslation()

    const validationUser = (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        login(textUser, " ")
        .then( data => {
            if ( data === LOGIN_ERRORS.PASSWORD ) {
                (isEmpty(error)) && setError("")
                nextStep()
            } else {
                setError(t("error_login_user"))
                setInterval( () => {
                    setError("")
                }, 3000)
            }
            setIsLoading(false)
        })
    }

    return(
        <>
        <Modal onclick={clickOutInput}>
            <Hedgehog width={50} height={50} fill={COLORS.basicBlue}/>
            <section className="LoginModal">
                <h2 className="LoginModal-title">{t("login_modal_title")}</h2>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
                <Separator>{t("common_or")}</Separator>
                <form onSubmit={ e => (step === 0) ? validationUser(e) : null }>
                { 
                    (step === 0)
                    ?
                    <>
                        <InputLogin title={t("login_modal_phone_email_or_username_placeholder")} text={textUser} changeText={changeTextUser} writing={writingUser} setWriting={setWritingUser}/>
                        <Button type={BUTTONS.submit} marginTop={1.5} marginBottom={1.5} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
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
                        <InputLogin title={"Password"} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword}/> 
                        <Button marginTop={1.5} marginBottom={1.5} type={BUTTONS.submit} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
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
            (!isEmpty(error)) && <Message type={MESSAGE.error} width={20}>{error}</Message>
        }
        </>
    )
}