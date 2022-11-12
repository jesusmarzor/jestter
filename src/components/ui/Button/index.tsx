import BUTTONS_TYPES from "../../../utils/BUTTONS_TYPES"
import { HEIGHTS, WIDTHS, MARGINS, COLORS } from "../../../utils/THEME"
import { StyledButton, styledButtonProps } from "./styles"
import "./styles.css"

interface props extends styledButtonProps{
    children: string | JSX.Element
    onclick?: () => void
    disabled?: boolean
    type?: string
}

export const Button: React.FunctionComponent<props> = ({children, color, backgroundColor, borderColor = COLORS.empty, marginTop = MARGINS.ZERO, marginBottom = MARGINS.ZERO, onclick, disabled = false, type = BUTTONS_TYPES.button, width = WIDTHS.FULL, height = HEIGHTS.MD}) => {
    switch (type) {
        case BUTTONS_TYPES.submit:
            return <StyledButton type="submit" color={color} backgroundColor={backgroundColor} borderColor={borderColor} marginTop={marginTop} marginBottom={marginBottom} width={width} height={height} disabled={disabled} className={`Button ${(disabled) && 'Button--disabled'}`} onClick={onclick} >{children}</StyledButton>
        default:
            return <StyledButton className="Button" color={color} backgroundColor={backgroundColor} borderColor={borderColor} marginTop={marginTop} marginBottom={marginBottom} width={width} height={height} disabled={disabled} onClick={onclick} >{children}</StyledButton>
    }
}