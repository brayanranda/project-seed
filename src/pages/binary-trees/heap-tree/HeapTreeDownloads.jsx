import Download from "@/components/ui/Download/Download";

function HeapTreeDownloads() {
    const downloads = [
        {
            title: "Material Arbol Heap",
            url: "/contenido/recurso/ARBOLHEAP.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Arbol Heap",
            url: "/contenido/JARS/SimArbolHeap.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default HeapTreeDownloads;