import Download from "@/components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function BTree () {
    const data = [
        {
            title: "Material de Teoría de Árbol B",
            url: "/contenido/recurso/ARBOLB.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Árbol B",
            url: "/contenido/JARS/SimArbolB.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/b-tree/description.md" first={true}/>
            <Section url="/markdown/b-tree/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}