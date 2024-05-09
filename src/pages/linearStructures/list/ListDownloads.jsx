import Download from "@/components/ui/Download/Download";

function ListDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Listas",
            url: "/contenido/recurso/LISTAS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simuladores para Listas",
            url: "/contenido/JARS/Listas.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default ListDownloads;