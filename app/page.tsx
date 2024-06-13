'use client'
import LoginForm from "./components/login-form";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  console.log(session)

  function login() {
    if (session) {
      return (
        <>
          Signed in as {session?.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }


  return (

    <main className="w-full h-dvh flex items-center justify-center">
      <LoginForm />

      {login()}

    </main>

  )
}
