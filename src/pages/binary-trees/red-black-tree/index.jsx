import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function RedBlackTree () {
    const data = [
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

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/red-black-tree/description.md" first={true}/>
            <Section url="/markdown/red-black-tree/implementation.md" last={true} startLeft={true}/>
            <Download data={data} />
        </main>
    );
}