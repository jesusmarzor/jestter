import { User } from "firebase/auth"
import { MIN_CHARACTERS_PASSWORD, PROVIDER_ID_PASSWORD } from "./CONSTANTS"

export const isEmpty = (text: string): boolean => {
    return !text
}

export const containNumber = (text: string): boolean => {
    return /\d/.test(text)
}

export const containLowerCase = (text: string): boolean => {
    return /[a-z]/.test(text)
}

export const containUpperCase = (text: string): boolean => {
    return /[A-Z]/.test(text)
}

export const containMinCharacters = (text: string, minCharacters: number) => {
    return text.length >= minCharacters
}

export const validatePassword = (password: string, confirmPassword: string) : boolean => {
    return (
        password === confirmPassword &&
        !isEmpty(password) &&
        containMinCharacters(password, MIN_CHARACTERS_PASSWORD)  &&
        containNumber(password) &&
        containLowerCase(password) &&
        containUpperCase(password)
    )
}

export const isVerifiedEmail = (user: User) => {
    return user?.emailVerified || user?.providerData[0].providerId !== PROVIDER_ID_PASSWORD
}