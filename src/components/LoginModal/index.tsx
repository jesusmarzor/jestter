import { useTranslation } from "react-i18next"
import { Modal } from "../Modal"
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
import { Loader } from "../Loader"

export const LoginModal = () => {
    const { textUser, textPassword, writingUser, writingPassword, changeTextUser, changeTextPassword, setWritingUser, setWritingPassword, clickOutInput } = useLogin()
    const { step, nextStep } = useSteps({maxStep: MAX_STEP_LOGIN_MODAL})
    const [isLoading, setIsLoading] = useState(false)
    const { t } = useTranslation()

    const validationUser = () => {
        setIsLoading(true)
        login(textUser, textPassword)
        .then( data => {
            ( data === LOGIN_ERRORS.INTERNAL ) && nextStep()
            console.log(data === LOGIN_ERRORS.INTERNAL)
            setIsLoading(false)
        })
    }

    return(
        <Modal onclick={clickOutInput}>
            <Hedgehog width={50} height={50} fill={COLORS.basicBlue}/>
            <section className="LoginModal">
                <h2 className="LoginModal-title">{t("login_modal_title")}</h2>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
                <Separator>{t("common_or")}</Separator>
                { 
                    (step === 0)
                    ?
                    <InputLogin title={t("login_modal_phone_email_or_username_placeholder")} text={textUser} changeText={changeTextUser} writing={writingUser} setWriting={setWritingUser}/>
                    :
                    <InputLogin title={"Password"} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword}/> 
                }
                <div className="LoginModal-buttons">
                    {
                        (step === 0)
                        ?
                        <Button onclick={validationUser} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                            {
                                (isLoading)
                                ? 
                                <Loader/>
                                :
                                t("common_next")
                            }
                        </Button>
                        :
                        <Button onclick={() => {}} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("login_section_button_label")}</Button>
                    }
                    <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("common_forgot_password")}</Button>
                </div>
                <footer className="LoginModal-footer">
                    <p>{t("login_modal_footer")}</p>
                </footer>
            </section>
        </Modal>
    )
}