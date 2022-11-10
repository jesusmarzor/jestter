import { useTranslation } from "react-i18next"
import { ModalConsumer } from "../../../contexts/ModalContext"
import useInput from "../../../hooks/useInput"
import useResetPassword from "../../../hooks/useResetPassword"
import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPES"
import COLORS from "../../../utils/COLORS"
import { HEIGHTS, MARGINS, WIDTHS } from "../../../utils/CONSTANTS"
import INPUT_TYPES from "../../../utils/INPUT_TYPES"
import MESSAGES_TYPE from "../../../utils/MESSAGES_TYPE"
import { isEmpty } from "../../../utils/VALIDATIONS"
import Hedgehog from "../../Icons/Hedgehog"
import { Button } from "../../ui/Button"
import { Input } from "../../ui/Input"
import { Loader } from "../../ui/Loader"
import { Message } from "../../ui/Message"
import { Modal } from "../../ui/Modal"
import "./styles.css"

interface props {
    goToView: () => void
}

const ResetPassword: React.FC<props> = ({ goToView }) => {
    const { text, writing, setWriting, changeText, clickOutInput } = useInput()
    const { isLoading, notification, setNotification, validationUser } = useResetPassword({ text, goToView })
    const { t } = useTranslation()
    const { setIsModalResetPassword: setIsModal } = ModalConsumer()
    return (
        <>
            <Modal close={setIsModal} onclick={clickOutInput}>
                <Hedgehog width={WIDTHS.MD_EXT} height={HEIGHTS.MD_EXT} fill={COLORS.basicBlue} />
                <section className="ResetPassword">
                    <h1 className="ResetPassword-title">{t("forgot_password_find_your_account")}</h1>
                    <form onSubmit={e => validationUser(e, t)}>
                        <Input type={INPUT_TYPES.TEXT} title={t("login_modal_phone_email_or_username_placeholder")} text={text} changeText={changeText} writing={writing} setWriting={setWriting} />
                        <Button type={BUTTONS_TYPES.submit} marginTop={MARGINS.MD} marginBottom={MARGINS.MD} disabled={!isEmpty(notification)} color={COLORS.white} backgroundColor={COLORS.black} borderColor={COLORS.gray}>
                            {
                                (isLoading)
                                    ?
                                    <Loader width={WIDTHS.XS} height={HEIGHTS.XS} color={COLORS.basicBlue} />
                                    :
                                    t("common_search")
                            }
                        </Button>
                    </form>
                </section>
            </Modal>
            {
                (!isEmpty(notification)) && <Message type={MESSAGES_TYPE.error} width={WIDTHS.XL2} setNotification={setNotification}>{notification}</Message>
            }
        </>
    )
}

export default ResetPassword