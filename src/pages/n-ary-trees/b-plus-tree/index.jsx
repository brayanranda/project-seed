import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import Section from "@/components/ui/Section";
import React, { useState, useEffect } from 'react';
import BPlusTreeDownloads from "./BPlusTreeDownloads";
import { consArbolBPlus } from "@/utilities/aside/arboles_enearios/arbol_b+";

export default function BPlusTree () {
    const [bPlusTree, setBPlusTree] = useState(consArbolBPlus);

    useEffect(() => {
        setBPlusTree(consArbolBPlus)
    }, [consArbolBPlus]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/b-plus-tree/description.md" first={true}/>,
        ope: <Section url="/markdown/b-plus-tree/operaciones.md" first={true}/>,
        impl: <Section url="/markdown/b-plus-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={bPlusTree}
                    setData={setBPlusTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <BPlusTreeDownloads />
                </div>
            </div>
        </main>
    )
}