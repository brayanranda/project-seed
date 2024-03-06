import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function AVLTree () {
    const data = [
        {
            title: "Material de Árboles AVL",
            url: "/contenido/recurso/ARBOLAVL.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Árboles AVL",
            url: "/contenido/JARS/SimArbolAVL.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/avl-tree/description.md" first={true}/>
            <Section url="/markdown/avl-tree/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}