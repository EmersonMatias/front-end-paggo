'use client'
import { useState } from "react";
import UploadZone from "../upload-zone/upload-zone";
import UploadedFiles from "../uploaded-files";
import axios from "axios";
import { useSession } from "next-auth/react";
import { resetUpload, uploadToServer } from "./functions";

export default function UploadContainer() {
    const [uploadedFiles, setUploadedFiles] = useState<TFile>()
    const [text, setText] = useState("")
    const { data: session } = useSession()

    async function getAllUsers() {
        const sucess = await axios.get("http://localhost:3005", { headers: { "Authorization": `Bearer: ${session?.userToken}` } })
        console.log(sucess)
    }

    console.log(uploadedFiles?.uploaded )

   

    //getAllUsers()

    return (
        <div className="bg-black px-10 py-10 flex flex-col gap-5 backdrop-blur-xl bg-opacity-50 rounded-lg items-center w-[700px]">
            {text.length === 0 && <UploadZone setUploadedFiles={setUploadedFiles} />}

            {text &&
                <div className="bg-slate-400 w-full p-4 text-wrap text-justify">
                    {text}
                </div>
            }

            {uploadedFiles && <UploadedFiles uploadedFiles={uploadedFiles} />}

           {(uploadedFiles?.uploaded === undefined || uploadedFiles.uploaded === false) &&  <button className="bg-blue-700 text-white font-bold text-lg px-10 py-3 rounded-md hover:bg-blue-900" onClick={() => uploadToServer({ session, setUploadedFiles, uploadedFiles, setText })}>Fazer Upload</button> }

           {uploadedFiles?.uploaded && <button className="bg-orange-700 text-white font-bold text-lg px-10 py-3 rounded-md hover:bg-blue-900" onClick={() => resetUpload({setText,setUploadedFiles})}>Fazer outro upload</button>}


        </div>
    )
}