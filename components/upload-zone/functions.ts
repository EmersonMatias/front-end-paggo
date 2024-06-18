export function dragMessage(isDragActive: boolean, isDragReject: boolean) {
    if (!isDragActive) return "Arraste seus arquivo nessa área"

    if (isDragReject) return "Arquivos não suportados"

    return "Solte seus arquivos nessa área"
}