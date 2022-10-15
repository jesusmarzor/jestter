import Hedgehog from "../../components/Icons/Hedgehog"
import { Footer } from "../../components/Login/Footer"
import { Header } from "../../components/Login/Header"
import { LoginSection } from "../../components/Login/LoginSection"
import { RegisterSection } from "../../components/Login/RegisterSection"
import COLORS from "../../utils/COLORS"
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
                <Hedgehog width={300} height={300} fill={COLORS.white}/>
            </picture>
            <Footer/>
        </div>
    )
}

export default Login