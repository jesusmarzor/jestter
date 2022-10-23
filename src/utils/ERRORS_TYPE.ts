export const LOGIN_ERRORS_TYPE = {
    USER: "auth/user-not-found",
    PASSWORD: "auth/wrong-password",
    MANY_REQUESTS: "auth/too-many-requests",
    INTERNAL: "auth/internal-error",
    INVALID_EMAIL: "auth/invalid-email"
}

export const REGISTER_ERRORS_TYPE = {
    EMAIL_IN_USE: "auth/email-already-in-use"
}