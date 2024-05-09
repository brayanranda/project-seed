import Download from "@/components/ui/Download/Download";

function AvlTreeDownloads() {
    const downloads = [
        {
            title: "Material de Árboles AVL",
            url: "/contenido/recurso/ARBOLAVL.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Árboles AVL",
            url: "/contenido/JARS/SimArbolAVL.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default AvlTreeDownloads;