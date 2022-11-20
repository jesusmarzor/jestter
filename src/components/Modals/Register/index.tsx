import { useTranslation } from "react-i18next"
import { ModalConsumer } from "../../../contexts/ModalContext"
import useInput from "../../../hooks/useInput"
import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPES"
import INPUT_TYPES from "../../../utils/INPUT_TYPES"
import { COLORS, HEIGHTS, MARGINS, WIDTHS } from "../../../utils/THEME"
import Hedgehog from "../../Icons/Hedgehog"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Modal } from "../../ui/Modal"
import { isEmpty } from "../../../utils/VALIDATIONS"
import useRegister from "../../../hooks/useRegister"
import { Loader } from "../../ui/Loader"
import { Message } from "../../ui/Message"
import MESSAGES_TYPE from "../../../utils/MESSAGES_TYPE"
import "./styles.css"

export const Register = () => {
    const { t } = useTranslation()
    const { text: textName, changeText: changeTextName, writing: writingName, setWriting: setWritingName, clickOutInput: clickOutInputName } = useInput()
    const { text: textEmail, changeText: changeTextEmail, writing: writingEmail, setWriting: setWritingEmail, clickOutInput: clickOutInputEmail } = useInput()
    const { text: textPassword, changeText: changeTextPassword, writing: writingPassword, setWriting: setWritingPassword, clickOutInput: clickOutInputPassword } = useInput()
    const { text: textConfirmPassword, changeText: changeTextConfirmPassword, writing: writingConfirmPassword, setWriting: setWritingConfirmPassword, clickOutInput: clickOutInputConfirmPassword } = useInput()
    const { isLoading, notification, setNotification, registerUser } = useRegister({name: textName, email: textEmail, password: textPassword, confirmPassword: textConfirmPassword})
    const { setIsModalRegister } = ModalConsumer()
    const clickOutAllInput = () => {
        clickOutInputName()
        clickOutInputEmail()
        clickOutInputPassword()
        clickOutInputConfirmPassword()
    }
    return(
        <>
            <Modal close={() => { setIsModalRegister(false)} } onclick={clickOutAllInput}>
                <Hedgehog width={WIDTHS.MD_EXT} height={HEIGHTS.MD_EXT} fill={COLORS.basicBlue} />
                <section className="Register">
                        <h2 className="Register-title">{t("register_modal_title")}</h2>
                        <form onSubmit={(e) => {registerUser(e, t)}}>
                            {
                                <>
                                    <Input type={INPUT_TYPES.TEXT} title={t("common_name")} text={textName} changeText={changeTextName} writing={writingName} setWriting={setWritingName} marginY={MARGINS.SM}/>
                                    <Input type={INPUT_TYPES.TEXT} title={t("common_email")} text={textEmail} changeText={changeTextEmail} writing={writingEmail} setWriting={setWritingEmail} marginY={MARGINS.SM} />
                                    <Input type={INPUT_TYPES.PASSWORD} title={t("common_password")} text={textPassword} changeText={changeTextPassword} writing={writingPassword} setWriting={setWritingPassword} marginY={MARGINS.SM} />
                                    <Input type={INPUT_TYPES.PASSWORD} title={t("common_password")} text={textConfirmPassword} changeText={changeTextConfirmPassword} writing={writingConfirmPassword} setWriting={setWritingConfirmPassword} marginY={MARGINS.SM} />
                                    <Button type={BUTTONS_TYPES.submit} marginTop={MARGINS.MD} marginBottom={MARGINS.MD} disabled={!isEmpty(notification)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                                        {
                                            (isLoading)
                                                ?
                                                <Loader width={WIDTHS.XS} height={HEIGHTS.XS} color={COLORS.basicBlue} />
                                                :
                                                t("common_register")
                                        }
                                    </Button>
                                </>
                            }
                        </form>
                    </section>
            </Modal>
            {
                (!isEmpty(notification)) && <Message type={MESSAGES_TYPE.error} width={WIDTHS.XL2} setNotification={setNotification}>{notification}</Message>
            }
        </>
    )
}