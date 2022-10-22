import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import COLORS from "../../utils/COLORS"
import Hedgehog from "../Icons/Hedgehog"
import { Modal } from "../Modal"
import { Button } from "../ui/Button"
import { InputLogin } from "../ui/InputLogin"
import Separator from "../ui/Separator"
import { isEmpty } from "../../utils/VALIDATIONS" 
import "./styles.css"

export const LoginModal = () => {
    const [step, setStep] = useState(0)
    const [writing, setWriting] = useState(false)
    const [writingPassword, setWritingPassword] = useState(false)
    const [textUser, setTextUser] = useState("")
    const [textPassword, setTextPassword] = useState("")
    const { t } = useTranslation()
    
    const changeTextUser = (e: any) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setTextUser(e.target.value) : setTextUser("")
    }

    const changeTextPassword = (e: any) => {
        let clearText = (e.target.value).trim()
        !isEmpty(clearText) ? setTextPassword(e.target.value) : setTextPassword("")
    }

    const clickOut = () => {
        if (writing) { setWriting(false) }
        if (writingPassword) {setWritingPassword(false)}
    }

    return(
        <Modal onclick={clickOut}>
            <Hedgehog width={50} height={50} fill={COLORS.basicBlue}/>
            <section className="LoginModal">
                <h2 className="LoginModal-title">{t("login_modal_title")}</h2>
                <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
                <Separator>{t("common_or")}</Separator>
                { (step === 0) && <InputLogin title={t("login_modal_phone_email_or_username_placeholder")} text={textUser} changeText={changeTextUser} writing={writing} setWriting={setWriting}/> }
                { (step === 1) && <InputLogin title={"Password"} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword}/> }
                <div className="LoginModal-buttons">
                    <Button onclick={() => setStep(step+1)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>{t("common_next")}</Button>
                    <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("common_forgot_password")}</Button>
                </div>
                <footer className="LoginModal-footer">
                    <p>{t("login_modal_footer")}</p>
                </footer>
            </section>
        </Modal>
    )
}