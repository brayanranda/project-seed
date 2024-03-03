import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function BinaryTree () {
    const data = [
        {
            title: "Material Arbol Binario General",
            url: "/contenido/recurso/ARBOL BINARIO.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para ArbolBinario",
            url: "/contenido/JARS/SimArbolBinarioGral.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/binary-tree/description.md" first={true}/>
            <Section url="/markdown/binary-tree/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}