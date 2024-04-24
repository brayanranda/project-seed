import Download from "@/components/ui/Download/Download";

function BinarySearchTreeDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Árbol Binario de Búsqueda",
            url: "/contenido/recurso/ARBOLBINARIOBUSQUEDA.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Árbol Binario de Búsqueda",
            url: "/contenido/JARS/SimArbolBinarioBusqueda.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default BinarySearchTreeDownloads;