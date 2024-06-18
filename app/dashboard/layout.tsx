import Header from "@/components/hader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
    children,
}: { children: React.ReactNode }) {
    const userToken = cookies().get("token")
    const sessionToken = cookies().get("next-auth.session-token")
    
    if (!userToken && !sessionToken) {
        return redirect("/")
    }

    return (
        <section>
            <Header />

            {children}
        </section>
    )
}