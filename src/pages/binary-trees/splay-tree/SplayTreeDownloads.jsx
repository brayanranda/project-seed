import Download from "@/components/ui/Download/Download";

function SplayTreeDownloads() {
    const downloads = [
        {
            title: "Material Arbol Splay",
            url: "/contenido/recurso/ARBOLSPLAY.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para ArbolSplay",
            url: "/contenido/JARS/SimArbolSplay.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default SplayTreeDownloads;