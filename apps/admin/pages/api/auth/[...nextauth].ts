import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// NEXT_PUBLIC_KEYCLOAK_CLIENT = "demo"
// NEXT_PUBLIC_KEYCLOAK_URL = "https://auth.dev.strelka.cz/auth"
// NEXT_PUBLIC_KEYCLOAK_REALM = "strelka"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "450910966567-b8038ngsido1mav16hlp5k1vml22ffao.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
})
