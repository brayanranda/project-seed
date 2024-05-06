import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import Background from '@/components/ui/Background';
import Aside from '@/components/ui/Aside';
import NaryDownloads from './NaryDownloads';
import { consEnearioTree } from '@/utilities/aside/arboles_enearios/arbol_eneario';

export default function NAryTree () {
    const [naryTree, setNaryTree] = useState(consEnearioTree);

    useEffect(() => {
        setNaryTree(consEnearioTree)
    }, [consEnearioTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/n-ary-tree/description.md" first={true}/>,
        reco: <Section url="/markdown/n-ary-tree/recorrido.md" first={true}/>,
        impl: <Section url="/markdown/n-ary-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={naryTree}
                    setData={setNaryTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <NaryDownloads />
                </div>
            </div>
        </main>
    )
}