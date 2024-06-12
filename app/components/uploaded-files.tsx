import Image from "next/image";
import { MdCheckCircle, MdError } from "react-icons/md";

type TUploadedFiles = {
    uploadedFiles: TFile[]
}

export default function UploadedFiles({ uploadedFiles }: TUploadedFiles) {
    console.log(uploadedFiles)

    return (
        <div className="overflow-y-scroll max-h-[400px] bg-gray-500 no-scrollbar text-wrap ">
            {uploadedFiles.length !== 0 &&  uploadedFiles.map(({ previewURL, name, size }) => (
                <div className="bg-black flex justify-between text-white items-center border-b-[1px] gap-20" key={name}>
                    <div className="flex mr-10 items-center">
                        <Image src={previewURL} alt="as" className="w-[80px] h-fit" width={50} height={50} />
                        <div>
                            <p>{name}</p>
                            <p>{size}</p>
                            <p></p>
                        </div>
                    </div>

                    <div className="">
                        <MdError className="h-[40px] w-auto text-red-500" />
                        <MdCheckCircle className="h-[40px] w-auto text-green-500" />
                    </div>

                </div>
            ))}
        </div>

    )
}