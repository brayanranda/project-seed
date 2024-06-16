import Download from "@/components/ui/Download/Download";

function SequenceDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Secuencia",
            url: "/contenido/recurso/SECUENCIA.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Secuencia",
            url: "/contenido/JARS/SimSecuencia.zip",
        },
        {
            title: "Manual de Usuario del Simulador de Secuencia",
            url: "/contenido/JARS/SimSecuencia.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default SequenceDownloads;