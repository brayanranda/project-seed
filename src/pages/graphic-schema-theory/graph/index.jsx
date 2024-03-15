import Download from "@/components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function Graph () {
    const data = [
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

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/graph/description.md" first={true}/>
            <Section url="/markdown/graph/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}