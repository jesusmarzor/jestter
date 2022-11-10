/// <reference types="vite/client" />

interface User {
    uid: string
    name: string | null
    email: string | null
    emailVerified: boolean
    phoneNumber: string | null
    photoURL: string | null
}