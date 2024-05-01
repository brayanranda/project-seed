import Download from "@/components/ui/Download/Download";

function RedBlackTreeDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Árbol RojiNegro",
            url: "/contenido/recurso/ARBOLROJINEGRO.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simuladores para Árbol RojiNegro",
            url: "/contenido/JARS/SimArbolRojiNegro.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default RedBlackTreeDownloads;