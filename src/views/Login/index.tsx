import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Login/Footer"
import { Header } from "../../components/Login/Header"
import { LoginSection } from "../../components/Login/LoginSection"
import { RegisterSection } from "../../components/Login/RegisterSection"
import { LoginModal } from "../../components/LoginModal"
import { useLocation, useNavigate } from "react-router-dom"
import COLORS from "../../utils/COLORS"
import background from "../../assets/img/lohp_en_1302x955.png"
import "./styles.css"
import { LOCATION_HOME } from "../../utils/CONSTANTS"
import { ModalConsumer } from "../../contexts/ModalContext"

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