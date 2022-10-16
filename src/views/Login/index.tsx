import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Login/Footer"
import { Header } from "../../components/Login/Header"
import { LoginSection } from "../../components/Login/LoginSection"
import { RegisterSection } from "../../components/Login/RegisterSection"
import COLORS from "../../utils/COLORS"
import background from "../../assets/img/lohp_en_1302x955.png"
import "./index.css"

const Login = () => {
    return(
        <div className="Login">
            <section className="Login-section">
                <Header/>
                <RegisterSection/>
                <LoginSection/>
            </section>
            <picture className="Login-picture">
                <img className="Login-background" src={background}/>
                <picture className="Login-logo">
                    <Hedgehog width={350} height={350} fill={COLORS.white}/>
                </picture>
            </picture>
            <Footer/>
        </div>
    )
}

export default Login