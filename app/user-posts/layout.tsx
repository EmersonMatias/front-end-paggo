import Header from "@/components/hader";
import React from "react";

export default async function UserPostsLayout({
    children,
}: { children: React.ReactNode }) {

    return (
        <section>
            <Header />

            {children}
        </section>
    )
}