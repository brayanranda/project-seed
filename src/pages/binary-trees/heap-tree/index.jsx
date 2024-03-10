import Download from "../../../components/ui/Download/Download";

import Section from "@/components/ui/Section";

export default function HeapTree () {
    const data = [
        {
            title: "Material Arbol Heap",
            url: "/contenido/recurso/ARBOLHEAP.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Arbol Heap",
            url: "/contenido/JARS/SimArbolHeap.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/heap-tree/description.md" first={true}/>
            <Section url="/markdown/heap-tree/implementation.md" last={true} startLeft={true}/>
            <Download data={data} />
        </main>
    );
}