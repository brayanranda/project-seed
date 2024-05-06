import Download from "@/components/ui/Download/Download";

function HashTableDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Tabla Hash",
            url: "/contenido/recurso/TABLASHASH.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para una Tabla Hash",
            url: "/contenido/JARS/SimTablaHash.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default HashTableDownloads;