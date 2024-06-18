import Link from "next/link";
import ExitButton from "./exit-button";

export default function Header() {
    return (
        <header className="w-full h-[80px] bg-black text-white bg-opacity-70 flex items-center justify-center gap-10">
            <Link href="dashboard" className="p-2 bg-blue-400 font-semibold text-2xl rounded-lg hover:bg-blue-700">Dashboard</Link>
            <Link href="user-posts" className="p-2 bg-blue-400 font-semibold text-2xl rounded-lg hover:bg-blue-700">Posts</Link>

            <ExitButton />
        </header>
    )
}