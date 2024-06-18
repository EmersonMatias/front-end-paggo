import axios from "axios"
import { Session } from "next-auth"
import { Dispatch, SetStateAction } from "react"

type TUploadToServer = {
    uploadedFiles: TFile | undefined
    session: Session | null,
    setUploadedFiles: Dispatch<SetStateAction<TFile | undefined>>
    setText: Dispatch<SetStateAction<string>>
}

export async function uploadToServer({uploadedFiles,session,setUploadedFiles,setText}: TUploadToServer) {
    if (uploadedFiles === undefined) {
        return alert("Por favor, inclua um arquivo!")
    } else {
        try {
            const data = new FormData()
            data.append("file", uploadedFiles.file)
            const sucess = await axios.post("http://localhost:3005/upload", data, {
                headers: { "Authorization": `Bearer: ${session?.userToken}` }, onUploadProgress: (progressEvent) => {
                    const total = progressEvent.total ?? 1;
                    setUploadedFiles({ ...uploadedFiles, progress: (Math.round((progressEvent.loaded * 100) / total)) })
                    console.log(`Progresso: ${progressEvent.loaded} de ${total}`);
                }
            })
            
            setUploadedFiles({...uploadedFiles, uploaded: true})
            setText(sucess.data)
            console.log(sucess.data)
        } catch (error) {
            setUploadedFiles({...uploadedFiles, error: true})
            console.log(error)
        }
    }
}

type TResetUpload = {
    setUploadedFiles: Dispatch<SetStateAction<TFile | undefined>>
    setText: Dispatch<SetStateAction<string>>
}

export function resetUpload({setText,setUploadedFiles}: TResetUpload){
    setText("")
    setUploadedFiles(undefined)
}