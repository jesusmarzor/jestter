import { Trans } from "react-i18next"
import { COLORS } from "../../../../utils/THEME"
import "./styles.css"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Paragraph = styled.p`
    color: ${COLORS.graySecond}
`

const LinkJestter = styled(Link)`
    color: ${COLORS.basicBlue}
`

export const FooterRegisterSection = () => {
    return (
        <footer className="FooterRegisterSection">
            <Paragraph className="FooterRegisterSection-p">
                <Trans i18nKey={"onboarding.register.footer"}>
                    <LinkJestter to=""></LinkJestter>
                    <LinkJestter to=""></LinkJestter>
                    <LinkJestter to=""></LinkJestter>
                </Trans>
            </Paragraph>
        </footer>
    )
}