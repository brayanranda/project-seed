import Download from "@/components/ui/Download/Download";

function QueueDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Colas",
            url: "/contenido/recurso/COLAS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simuladores para Colas",
            url: "/contenido/JARS/Colas.zip",
        }
    ]

    return (
        <Download data={downloads} />
    );
}

export default QueueDownloads;