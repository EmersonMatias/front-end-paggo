import LoginButton from "./components/login-button";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export default function Home() {
  const userToken = cookies().get("token")
  const sessionToken = cookies().get("next-auth.session-token")

  if (userToken && sessionToken) {
   return  redirect("/dashboard")
  }

  return (
    <main className="w-full h-dvh flex items-center justify-center">
      <LoginButton />
    </main>

  )
}
