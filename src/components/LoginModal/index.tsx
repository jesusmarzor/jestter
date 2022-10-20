import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import COLORS from "../../utils/COLORS"
import Hedgehog from "../Icons/Hedgehog"
import { Modal } from "../Modal"
import { Button } from "../ui/Button"
import { InputLogin } from "../ui/InputLogin"
import Separator from "../ui/Separator"

export const LoginModal = () => {
    const [writing, setWriting] = useState(false)

    const { t } = useTranslation()
    return(
        <Modal onclick={() => writing && setWriting(false)}>
            <Hedgehog width={50} height={50} fill={COLORS.basicBlue}/>
            <h2>{t("login_modal_title")}</h2>
            <Button color={COLORS.black} backgroundColor={COLORS.white} borderColor={COLORS.gray}>{t("login_modal_button_google")}</Button>
            <Separator>{t("common_or")}</Separator>
            <InputLogin writing={writing} setWriting={setWriting}/>
        </Modal>
    )
}