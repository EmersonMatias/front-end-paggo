import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { sign } from "jsonwebtoken"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        session({ session, token }) {
            session.userToken = sign(token, process.env.JWT_SECRET_KEY!)
            console.log(token)
            return session
        }
    }
})

export { handler as GET, handler as POST }