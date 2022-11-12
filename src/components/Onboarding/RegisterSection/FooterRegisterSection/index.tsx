import { useTranslation } from "react-i18next"
import { COLORS } from "../../../../utils/THEME"
import "./styles.css"
import styled from "styled-components"

const Paragraph = styled.p`
    color: ${COLORS.graySecond}
`

export const FooterRegisterSection = () => {
    const { t } = useTranslation()
    return (
        <footer className="FooterRegisterSection">
            <Paragraph className="FooterRegisterSection-p">{t("register_section_footer")}</Paragraph>
        </footer>
    )
}