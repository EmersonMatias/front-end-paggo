import Dropzone from "react-dropzone";

type TUploadZone = {
    handleUpload(files: File[]): void
}

export default function UploadZone({handleUpload}: TUploadZone){
    function dragMessage(isDragActive: boolean, isDragReject: boolean) {
        if (!isDragActive) return "Arraste seus arquivo nessa área"

        if (isDragReject) return "Arquivos não suportados"

        return "Solte seus arquivos nessa área"

    }

    return(
        <Dropzone accept={{ 'image/*': [".png, .jpeg, .jpg,.webp, .pdf"] }} onDropAccepted={handleUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()} className={`bg-pink-500 w-[400px] h-[200px] ${isDragActive && "bg-blue-500"} ${isDragReject && "bg-red-500"} flex items-center justify-center`}>
                <input className="hidden" {...getInputProps} />
                <p className="text-white font-bold text-xl">{dragMessage(isDragActive, isDragReject)}</p>
            </div>
        )}
    </Dropzone>
    )
}