import Image from "next/image";
import { MdCheckCircle, MdError } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar"

type TUploadedFiles = {
    uploadedFiles: TFile,
}

export default function UploadedFiles({ uploadedFiles }: TUploadedFiles) {

    return (
        <div className="flex  justify-between text-white items-center w-full">
            <div className="flex items-center">
                <Image src={uploadedFiles.previewURL} alt="as" className="w-[80px] h-fit" width={50} height={50} />
                <div className="text-wrap ml-2 max-w-[500px] bg-slate-600 overflow-clip">
                    <p>{uploadedFiles.name}</p>
                    <p>{uploadedFiles.size}</p>
                    <p></p>
                </div>
            </div>

            <div className="w-fit">
                {uploadedFiles.error && <MdError className="h-[40px] w-auto text-red-500" />}
                {uploadedFiles.uploaded && <MdCheckCircle className="h-[40px] w-auto text-green-500" />}
                {uploadedFiles.uploaded === false &&
                    <div className="w-10 h-10">
                        <CircularProgressbar value={uploadedFiles.progress} styles={{ path: { stroke: '#6375ff' } }} strokeWidth={16} />
                    </div>
                }
            </div>

        </div>
    )
}