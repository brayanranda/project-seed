import Download from "@/components/ui/Download/Download";

function Tree123Downloads() {
    const downloads = [
        {
            title: "Material de Arbol 1-2-3",
            url: "/contenido/recurso/ARBOL1-2-3.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Arbol 1-2-3",
            url: "/contenido/JARS/SimArbol_123.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default Tree123Downloads;