import UploadContainer from "../components/upload-container"
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'


export default function Dashboard() {
    let uploadedFiles = []
    
    const userToken = cookies().get("token")
    const sessionToken = cookies().get("next-auth.session-token")
  
    if (!userToken && !sessionToken) {
     return  redirect("/")
    }


    return (
        <div  className="w-full h-dvh flex flex-col items-center justify-center">
            <UploadContainer />
        </div>
    )
}