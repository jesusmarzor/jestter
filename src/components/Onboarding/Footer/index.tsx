import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "./styles.css"

export const Footer = () => {
    const { t } = useTranslation()
    return(
        <footer className="Login-footer Footer">
            <ul className="Footer-ul">
                <li className="Footer-li"><Link to={"/"}>{t("common_about")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("help_center")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("terms_of_service")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("privacy_policy")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("cookie_policy")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("accessibility")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("ads_info")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("blog")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("status")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("careers")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("brand_resources")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("advertising")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("marketing")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("jestter_for_business")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("developers")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("directory")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("settings")}</Link></li>
                <li className="Footer-li">{t("twitter_copy_by")} <a href="https://jesusmarzor.vercel.app">Jesús Martín</a></li>
            </ul>
        </footer>
    )
}