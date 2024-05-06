import { constSplayTree } from "@/utilities/aside/arboles_binarios/splayTree";
import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";
import SplayTreeDownloads from "./SplayTreeDownloads";

export default function SplayTree () {
    const [splayTree, setSplayTree] = useState(constSplayTree);

    useEffect(() => {
        setSplayTree(constSplayTree)
    }, [constSplayTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/splay-tree/description.md" first={true}/>,
        eje: <Section url="/markdown/splay-tree/example.md" first={true}/>,
        ope: <Section url="/markdown/splay-tree/operations.md" first={true}/>,
        impl: <Section url="/markdown/splay-tree/implementation.md" first={true} last={true}/>,
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
                    <SplayTreeDownloads />
                </div>
            </div>
        </main>
    );
}