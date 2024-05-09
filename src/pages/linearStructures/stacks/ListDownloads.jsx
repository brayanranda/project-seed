import Download from "@/components/ui/Download/Download";

function ListDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Pila",
            url: "/contenido/recurso/PILAS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Pila",
            url: "/contenido/JARS/Pilas.zip",
        }
    ]

    return (
        <Download data={downloads} />
    );
}

export default ListDownloads;