import Download from "@/components/ui/Download/Download";

function BPlusTreeDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Árbol B+",
            url: "/contenido/recurso/ARBOLB+.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Árbol B+",
            url: "/contenido/JARS/SimArbolBMas.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default BPlusTreeDownloads;