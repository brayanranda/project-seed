import Download from "@/components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function NAryTree () {
    const data = [
        {
            title: "Material Arbol Eneario",
            url: "/contenido/recurso/ARBOLENEARIO.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para ArbolEneario",
            url: "/contenido/JARS/SimArbolEnearioGeneral.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/n-ary-tree/description.md" first={true}/>
            <Section url="/markdown/n-ary-tree/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}