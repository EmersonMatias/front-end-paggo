'use client'
import Image from "next/image";
import { useState } from "react";
import { MdError, MdCheckCircle } from "react-icons/md"
import UploadZone from "./upload-zone";
import { filesize } from "filesize";

type TFile = {
    file: File,
    name: string,
    previewURL: string,
    size: string,
    progress: number,
    uploaded: boolean,
    error: boolean,
    url: string
}

export default function UploadArea() {
    const [uploadedFiles, setUploadedFiles] = useState<TFile[]>([])

    function handleUpload(files: File[]) {
        console.log(files)

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

        console.log(newFiles)

        setUploadedFiles([...uploadedFiles, ...newFiles])
    }

    console.log(uploadedFiles)

    return (
        <div className="bg-orange-500 w-fit px-10 py-10 flex flex-col gap-5">
            <UploadZone handleUpload={handleUpload} />

            <div className="overflow-scroll h-[400px] bg-green-500">
                {uploadedFiles.map(({ previewURL, name, size }) => (
                    <div className="bg-black flex justify-between text-white items-center border-b-[1px]" key={name}>
                        <div className="flex">
                            <Image src={previewURL} alt="as" className="w-[80px] h-fit" width={50} height={50} />
                            <div>
                                <p>{name}</p>
                                <p>{size}</p>
                                <p></p>
                            </div>
                        </div>

                        <div>
                            <MdError className="h-[40px] w-auto text-red-500" />
                            <MdCheckCircle className="h-[40px] w-auto text-green-500" />
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}