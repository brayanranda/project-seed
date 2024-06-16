import Download from "@/components/ui/Download/Download";

function GraphDownloads() {
    const downloads = [
        {
            title: "Material de Teoría de Grafos",
            url: "/contenido/recurso/GRAFOS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Grafos",
            url: "/contenido/JARS/SimGrafoND.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default GraphDownloads;