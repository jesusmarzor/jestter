import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Onboarding/Footer"
import { Header } from "../../components/Onboarding/Header"
import { LoginSection } from "../../components/Onboarding/LoginSection"
import { RegisterSection } from "../../components/Onboarding/RegisterSection"
import { LoginModal } from "../../components/Login/Modal"
import { useLocation, useNavigate } from "react-router-dom"
import COLORS from "../../utils/COLORS"
import background from "../../assets/img/lohp_en_1302x955.png"
import { LOCATION_HOME } from "../../utils/CONSTANTS"
import { ModalConsumer } from "../../contexts/ModalContext"
import "./styles.css"

const Login = () => {
    const navigate = useNavigate()
    const locate = useLocation()
    const { isModalLogin: isModal } = ModalConsumer()

    const goToView = () => {
        navigate(locate?.state?.pathname ?? LOCATION_HOME)
    }

    return(
        <>
        <div className="Login">
            <div className="Login-section">
                <Header/>
                <RegisterSection/>
                <LoginSection/>
            </div>
            <picture className="Login-picture">
                <img className="Login-background" src={background}/>
                <picture className="Login-logo">
                    <Hedgehog width={350} height={350} fill={COLORS.white}/>
                </picture>
            </picture>
            <Footer/>
        </div>
        {(isModal) && <LoginModal goToView={goToView}/>}
        </>
    )
}

export default Login