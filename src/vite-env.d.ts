/// <reference types="vite/client" />

interface UserJestter {
    uid: string
    name: string | null
    email: string | null
    emailVerified: boolean
    phoneNumber: string | null
    photoURL: string | null
}

interface updateUserJestterData {
    displayName?: string,
    photoURL?: string
}