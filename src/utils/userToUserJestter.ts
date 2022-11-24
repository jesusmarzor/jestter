import { User } from "firebase/auth";

export default (user: User) => {
    return {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber
      }
}