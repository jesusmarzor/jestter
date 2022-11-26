import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { APP_NAME, URL_PORTFOLIO } from "../../../utils/CONSTANTS"
import "./styles.css"

export const Footer = () => {
    const { t } = useTranslation()
    return(
        <footer className="Login-footer Footer">
            <ul className="Footer-ul">
                <li className="Footer-li"><Link to={"/"}>{t("common.about_us")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.help_center")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.terms_of_service")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.privacy_policy")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.cookie_policy")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.accessibility")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.ads_info")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.blog")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.status")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.careers")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.brand_resources")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.advertising")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.marketing")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.app_for_business", {appName: APP_NAME})}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.developers")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.directory")}</Link></li>
                <li className="Footer-li"><Link to={"/"}>{t("common.settings")}</Link></li>
                <li className="Footer-li">
                    <Trans i18nKey={"common.twitter_copy_by"} values={{name: "Jesús Martín"}}>
                        <a href={URL_PORTFOLIO} target="_blank" rel='noreferrer'></a>
                    </Trans>
                </li>
            </ul>
        </footer>
    )
}