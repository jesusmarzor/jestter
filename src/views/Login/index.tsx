import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Login/Footer"
import { Header } from "../../components/Login/Header"
import { LoginSection } from "../../components/Login/LoginSection"
import { RegisterSection } from "../../components/Login/RegisterSection"
import COLORS from "../../utils/COLORS"
import background from "../../assets/img/lohp_en_1302x955.png"
import "./styles.css"
import { LoginModal } from "../../components/LoginModal"
import { useLocation, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const locate = useLocation()

    const goToView = () => {
        navigate(locate?.state?.pathname ?? '/')
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
        <LoginModal goToView={goToView}/>
        </>
    )
}

export default Login