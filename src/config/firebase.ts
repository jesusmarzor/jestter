import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, User, updateProfile, sendEmailVerification, deleteUser, GithubAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { isEmpty, isVerifiedEmail } from "../utils/VALIDATIONS";
import { LOGIN_ERRORS_TYPE, REGISTER_ERRORS_TYPE } from "../utils/ERRORS_TYPE";
import userToUserJestter from "../utils/userToUserJestter";

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

export const register = async (name: string, email: string, password: string) => {
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      if (!isEmpty(name) && !(await updateUser(userCredential.user, { displayName: name })) && await deleteAccount(userCredential.user)){
        return REGISTER_ERRORS_TYPE.INVALID_NAME
      }
      await sendEmailVerification(userCredential.user)
      const user: UserJestter = {
        uid: userCredential.user.uid,
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        photoURL: userCredential.user.photoURL,
        phoneNumber: userCredential.user.phoneNumber
      }
      return user
    }catch (error: any) {
      return error.code
    }
  
}

export const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if (!userCredential.user.emailVerified) {
        logout()
        return LOGIN_ERRORS_TYPE.NOT_VERIFIED
      }
      const user = userToUserJestter(userCredential.user)
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

export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return true
  } catch (error) {
    return false
  }
}

export const updateUser = async (user: User, data: updateUserJestterData) => {
  try {
    await updateProfile(user, data)
    return true
  } catch {
    return false
  }
}

export const deleteAccount = async (user: User) => {
  try {
    await deleteUser(user)
    return true
  } catch {
    return false
  }
}

export const loginWithGithub = async () => {
  try {
    const githubProvider = new GithubAuthProvider()
    const userCredential = await signInWithPopup(auth, githubProvider)
    const user = userToUserJestter(userCredential.user)
    return user
  } catch (error: any){
    return error.code
  }
  
}

export const onAuthUser = (loginAuth: any, goToView: any, setIsLoading: any) => {
  onAuthStateChanged(auth, firebaseUser => {
    if (firebaseUser != null && isVerifiedEmail(firebaseUser)) {
      const user = userToUserJestter(firebaseUser)
      loginAuth(user, goToView)
      setIsLoading(false)
    } else {
      setTimeout(() => setIsLoading(false), 400)
    }
  })
}