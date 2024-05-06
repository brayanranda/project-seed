import Section from "@/components/ui/Section";
import { consArbolB } from "@/utilities/aside/arboles_enearios/arbol_b";
import React, { useState, useEffect } from 'react';
import BTreeDownloads from "./BTreeDownloads";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";

export default function BTree () {
    const [bTree, setBTree] = useState(consArbolB);

    useEffect(() => {
        setBTree(consArbolB)
    }, [consArbolB]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/b-tree/description.md" first={true}/>,
        ope: <Section url="/markdown/b-tree/operaciones.md" first={true}/>,
        impl: <Section url="/markdown/b-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={bTree}
                    setData={setBTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <BTreeDownloads />
                </div>
            </div>
        </main>
    )
}