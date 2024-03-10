import Download from "@/components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function OneTwoThreeTree () {
    const data = [
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

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/1-2-3-tree/description.md" first={true}/>
            <Section url="/markdown/1-2-3-tree/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}