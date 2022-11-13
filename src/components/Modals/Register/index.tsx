import { ModalConsumer } from "../../../contexts/ModalContext"
import { COLORS, HEIGHTS, WIDTHS } from "../../../utils/THEME"
import Hedgehog from "../../Icons/Hedgehog"
import { Modal } from "../../ui/Modal"

export const Register = () => {
    const { setIsModalRegister } = ModalConsumer()
    return(
        <Modal close={() => { setIsModalRegister(false)} } onclick={() => {}}>
            <Hedgehog width={WIDTHS.MD_EXT} height={HEIGHTS.MD_EXT} fill={COLORS.basicBlue} />
        </Modal>
    )
}