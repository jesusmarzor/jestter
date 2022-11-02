import { useTranslation } from "react-i18next"
import { ModalConsumer } from "../../../contexts/ModalContext"
import useInput from "../../../hooks/useInput"
import useResetPassword from "../../../hooks/useResetPassword"
import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPE"
import COLORS from "../../../utils/COLORS"
import MESSAGES_TYPE from "../../../utils/MESSAGES_TYPE"
import { isEmpty } from "../../../utils/VALIDATIONS"
import Hedgehog from "../../Icons/Hedgehog"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Loader } from "../../ui/Loader"
import { Message } from "../../ui/Message"
import { Modal } from "../../ui/Modal"
import "./styles.css"

const ResetPassword = () => {
    const { text, writing, setWriting, changeText, clickOutInput } = useInput()
    const { isLoading, error, setError, validationUser } = useResetPassword({ text })
    const { t } = useTranslation()
    const { setIsModalResetPassword: setIsModal } = ModalConsumer()
    return (
        <>
            <Modal close={setIsModal} onclick={clickOutInput}>
                <Hedgehog width={50} height={50} fill={COLORS.basicBlue} />
                <Input type="text" title={t("login_modal_phone_email_or_username_placeholder")} text={text} changeText={changeText} writing={writing} setWriting={setWriting} />
                <Button type={BUTTONS_TYPES.submit} marginTop={1.5} marginBottom={1.5} disabled={!isEmpty(error)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                    {
                        (isLoading)
                            ?
                            <Loader width={1.2} height={1.2} color={COLORS.basicBlue} />
                            :
                            t("common_next")
                    }
                </Button>
            </Modal>
            {
                (!isEmpty(error)) && <Message type={MESSAGES_TYPE.error} width={20} setError={setError}>{error}</Message>
            }
        </>
    )
}

export default ResetPassword