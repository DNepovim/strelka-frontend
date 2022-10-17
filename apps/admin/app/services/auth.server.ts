import { Authenticator } from "remix-auth"
import { sessionStorage } from "~/services/session.server"
import { GoogleStrategy } from "remix-auth-google"
import { setUser } from "firebase/db"

export interface User {
  email?: string
  image?: string
  name?: string
  lastLoggedIn?: string
}

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
    }
    setUser(user)
    return user
  }
)

authenticator.use(googleStrategy)
