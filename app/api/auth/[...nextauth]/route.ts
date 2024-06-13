import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { sign } from "jsonwebtoken"
import { createToken } from "@/app/actions"

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
            createToken(session.userToken)
            return session
        },
        async redirect({baseUrl,url}){
            return ("http://localhost:3000/dashboard")
        }
    }
})

export { handler as GET, handler as POST }