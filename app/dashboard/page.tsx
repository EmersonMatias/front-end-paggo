import UploadContainer from "../components/upload-container"

export default function Dashboard() {
    let uploadedFiles = []
    


    return (
        <div  className="w-full h-dvh flex flex-col items-center justify-center">
            <UploadContainer />
        </div>
    )
}