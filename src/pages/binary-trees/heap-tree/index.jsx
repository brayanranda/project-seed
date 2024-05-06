import { constHeapTree } from "@/utilities/aside/arboles_binarios/heapTree";
import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";
import HeapTreeDownloads from "./HeapTreeDownloads";

export default function HeapTree () {
    const [splayTree, setSplayTree] = useState(constHeapTree);

    useEffect(() => {
        setSplayTree(constHeapTree)
    }, [constHeapTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/heap-tree/description.md" first={true}/>,
        ope: <Section url="/markdown/heap-tree/operations.md" first={true}/>,
        impl: <Section url="/markdown/heap-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={splayTree}
                    setData={setSplayTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <HeapTreeDownloads />
                </div>
            </div>
        </main>
    );
}