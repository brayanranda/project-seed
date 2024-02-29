import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function Queue () {
    const data = [
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

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/stack/description.md" first={true}/>
            <Section url="/markdown/stack/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}