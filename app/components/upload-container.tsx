'use client'
import { useState } from "react";
import UploadZone from "./upload-zone";
import { filesize } from "filesize";
import UploadedFiles from "./uploaded-files";

export default function UploadContainer() {
    const [uploadedFiles, setUploadedFiles] = useState<TFile[]>([])

    function handleUpload(files: File[]) {
        const newFiles: TFile[] = files.map((file) => (
            {
                file,
                name: file.name,
                previewURL: URL.createObjectURL(file),
                size: filesize(file.size),
                progress: 0,
                uploaded: false,
                error: false,
                url: ""

            }
        ))

        setUploadedFiles([...uploadedFiles, ...newFiles])
    }

    return (
        <div className="bg-black w-fit px-10 py-10 flex flex-col gap-5 backdrop-blur-xl bg-opacity-50 rounded-lg items-center max-w-[500px]">
            <UploadZone handleUpload={handleUpload} />

            <UploadedFiles uploadedFiles={uploadedFiles}/>

            <button className="bg-blue-700 text-white font-bold text-lg px-10 py-3 rounded-md hover:bg-blue-900">Fazer Upload</button>

        </div>
    )
}