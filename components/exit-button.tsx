'use client'
import { deleteCookie } from "@/app/actions"

export default function ExitButton() {
    async function exit(){
        await deleteCookie("token")
        await deleteCookie("next-auth.session-token")
        window.location.reload()
    }

    return (
        <button onClick={exit} className="p-4 bg-red-500 rounded-md absolute right-5 top-3">
            Sair
        </button>
    )
}