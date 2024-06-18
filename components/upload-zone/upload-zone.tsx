import Dropzone from "react-dropzone";
import { dragMessage } from "./functions";
import { filesize } from "filesize";
import { Dispatch, SetStateAction } from "react";

type TUploadZone = {
    setUploadedFiles: Dispatch<SetStateAction<TFile | undefined>>
}

export default function UploadZone({ setUploadedFiles }: TUploadZone) {
    function handleUpload(file: File[]) {
        const newFile: TFile = {
            file: file[0],
            name: file[0].name,
            previewURL: URL.createObjectURL(file[0]),
            size: filesize(file[0].size),
            progress: 0,
            uploaded: false,
            error: false,
            url: ""
        }

        setUploadedFiles(newFile)
    }

    return (
        <Dropzone accept={{ 'image/*': [".png, .jpeg, .jpg,.webp, .pdf"] }} onDropAccepted={handleUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <div {...getRootProps()} className={`bg-blue-500 w-full h-[200px] ${isDragActive && "bg-green-500"} ${isDragReject && "bg-red-500"} flex items-center justify-center bg-opacity-30`}>
                    <input className="hidden" {...getInputProps} />
                    <p className="text-white font-bold text-xl">{dragMessage(isDragActive, isDragReject)}</p>
                </div>
            )}
        </Dropzone>
    )
}