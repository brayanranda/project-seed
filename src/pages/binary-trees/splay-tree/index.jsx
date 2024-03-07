import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function SplayTree () {
    const data = [
        {
            title: "Material Arbol Splay",
            url: "/contenido/recurso/ARBOLSPLAY.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para ArbolSplay",
            url: "/contenido/JARS/SimArbolSplay.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/splay-tree/description.md" first={true}/>
            <Section url="/markdown/splay-tree/implementation.md" last={true} startLeft={true}/>
            <Download data={data} />
        </main>
    );
}