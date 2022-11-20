import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Onboarding/Footer"
import { Header } from "../../components/Onboarding/Header"
import { LoginSection } from "../../components/Onboarding/LoginSection"
import { RegisterSection } from "../../components/Onboarding/RegisterSection"
import { Login } from "../../components/Modals/Login"
import { useLocation, useNavigate } from "react-router-dom"
import background from "../../assets/img/lohp_en_1302x955.png"
import { LOCATION_HOME } from "../../utils/CONSTANTS"
import { HEIGHTS, WIDTHS, COLORS } from "../../utils/THEME"
import { ModalConsumer } from "../../contexts/ModalContext"
import ResetPassword from "../../components/Modals/ResetPassword"
import "./styles.css"
import { Register } from "../../components/Modals/Register"

const Onboarding = () => {
    const navigate = useNavigate()
    const locate = useLocation()
    const { isModalLogin, isModalResetPassword, isModalRegister } = ModalConsumer()

    const goToView = () => {
        navigate(locate?.state?.pathname ?? LOCATION_HOME)
    }

    return(
        <>
        <div className="Onboarding">
            <div className="Onboarding-section">
                <Header/>
                <RegisterSection goToView={goToView}/>
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
        {(isModalRegister) && <Register/>}
        {(isModalResetPassword) && <ResetPassword/>}
        </>
    )
}

export default Onboarding