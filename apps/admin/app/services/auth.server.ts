import { Authenticator } from "remix-auth"
import { sessionStorage } from "~/services/session.server"
import { GoogleStrategy } from "remix-auth-google"
import { setUser, User } from "firebase/user"
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  connectAuthEmulator,
} from "firebase/auth"
import { auth } from "firebase/db"

export const authenticator = new Authenticator<User>(sessionStorage)

const googleStrategy = new GoogleStrategy<User>(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: `${process.env.DOMAIN_URL}/auth/google/callback`,
  },
  async (params) => {
    const user = {
      email: params.profile.emails[0].value,
      image: params.profile.photos[0].value,
      name: params.profile.displayName,
      idToken: params.extraParams.id_token,
    }

    if (!auth.currentUser) {
      const credential = GoogleAuthProvider.credential(
        params.extraParams.id_token
      )

      await signInWithCredential(auth, credential).catch((error) => {
        // TODO: Better error handling
        console.log(error)
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(credential)
        // ...
      })
      await setUser(user)
    }
    return user
  }
)

authenticator.use(googleStrategy)
