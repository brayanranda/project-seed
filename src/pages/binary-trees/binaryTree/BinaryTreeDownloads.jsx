import Download from "@/components/ui/Download/Download";

function BinaryTreeDownloads() {
    const downloads = [
        {
            title: "Material Arbol Binario General",
            url: "/contenido/recurso/ARBOL BINARIO.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para ArbolBinario",
            url: "/contenido/JARS/SimArbolBinarioGral.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default BinaryTreeDownloads;