import { useTranslation } from "react-i18next";
import LANGUAGES from "../../utils/LANGUAGES";

export const Translation = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        const lang = (i18n.language !== LANGUAGES.ES) ? LANGUAGES.ES : LANGUAGES.EN
        i18n.changeLanguage(lang)
        localStorage.setItem('lang', lang)
    }

    return (
        <button className="Translation" onClick={changeLanguage}>
            
        </button>
    )
}