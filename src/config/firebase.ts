import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"

const { VITE_APP_API_KEY, VITE_APP_AUTH_DOMAIN, VITE_APP_PROJECT_ID, VITE_APP_STORAGE_BUCKET, VITE_APP_MESSAGING_SENDER_ID, VITE_APP_APP_ID, VITE_APP_MEASUREMENT_ID } = import.meta.env

const firebaseConfig = {
    apiKey: VITE_APP_API_KEY, 
    authDomain: VITE_APP_AUTH_DOMAIN,
    projectId: VITE_APP_PROJECT_ID, 
    storageBucket: VITE_APP_STORAGE_BUCKET, 
    messagingSenderId: VITE_APP_MESSAGING_SENDER_ID, 
    appId: VITE_APP_APP_ID, 
    measurementId: VITE_APP_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
const auth = getAuth(app)

export const register = async (email: string, password: string) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      return user
    }catch (error: any) {
      return error.code
    }
  
}

export const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      return user
    } catch (error: any) {
      return error.code
    }
}

export const logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch(error){
    return false
  }
}