import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function BinarySearchTree () {
    const data = [
        {
            title: "Material de Teoría de Árbol Binario de Búsqueda",
            url: "/contenido/recurso/ARBOLBINARIOBUSQUEDA.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Árbol Binario de Búsqueda",
            url: "/contenido/JARS/SimArbolBinarioBusqueda.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/binary-search-tree/description.md" first={true}/>
            <Section url="/markdown/binary-search-tree/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}