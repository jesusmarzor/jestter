export const LOGIN_ERRORS_TYPE = {
    USER: "auth/user-not-found",
    PASSWORD: "auth/wrong-password",
    MANY_REQUESTS: "auth/too-many-requests",
    INTERNAL: "auth/internal-error",
    INVALID_EMAIL: "auth/invalid-email",
    NOT_VERIFIED: "auth/not-verified"
}

export const REGISTER_ERRORS_TYPE = {
    EMAIL_IN_USE: "auth/email-already-in-use",
    MISSING_EMAIL: "auth/missing-email",
    INVALID_EMAIL: "auth/invalid-email",
    INVALID_NAME: "auth/invalid-name"
}