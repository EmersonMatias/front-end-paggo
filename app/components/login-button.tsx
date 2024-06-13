'use client'
import { signIn } from "next-auth/react"

export default function LoginButton(){

    return(
        <button className="bg-gray-700 px-10 py-5 rounded-lg text-white" onClick={() => signIn()}>
            Fazer login
        </button>
    )
}