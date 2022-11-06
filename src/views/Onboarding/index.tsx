import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Onboarding/Footer"
import { Header } from "../../components/Onboarding/Header"
import { LoginSection } from "../../components/Onboarding/LoginSection"
import { RegisterSection } from "../../components/Onboarding/RegisterSection"
import { Login } from "../../components/Modals/Login"
import { useLocation, useNavigate } from "react-router-dom"
import COLORS from "../../utils/COLORS"
import background from "../../assets/img/lohp_en_1302x955.png"
import { HEIGHTS, LOCATION_HOME, WIDTHS } from "../../utils/CONSTANTS"
import { ModalConsumer } from "../../contexts/ModalContext"
import "./styles.css"
import ResetPassword from "../../components/Modals/ResetPassword"

const Onboarding = () => {
    const navigate = useNavigate()
    const locate = useLocation()
    const { isModalLogin, isModalResetPassword } = ModalConsumer()

    const goToView = () => {
        navigate(locate?.state?.pathname ?? LOCATION_HOME)
    }

    return(
        <>
        <div className="Onboarding">
            <div className="Onboarding-section">
                <Header/>
                <RegisterSection/>
                <LoginSection/>
            </div>
            <picture className="Onboarding-picture">
                <img className="Onboarding-background" src={background}/>
                <picture className="Onboarding-logo">
                    <Hedgehog width={WIDTHS.XL2} height={HEIGHTS.XL2} fill={COLORS.white}/>
                </picture>
            </picture>
            <Footer/>
        </div>
        {(isModalLogin) && <Login goToView={goToView}/>}
        {(isModalResetPassword) && <ResetPassword/>}
        </>
    )
}

export default Onboarding