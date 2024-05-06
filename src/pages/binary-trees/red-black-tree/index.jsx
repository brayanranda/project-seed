import React, { useState, useEffect } from 'react';

import Section from "@/components/ui/Section";
import Aside from '@/components/ui/Aside';
import Background from '@/components/ui/Background';
import RedBlackTreeDownloads from './RedBlackTreeDownloads';
import { constRedBlackTree } from '@/utilities/aside/arboles_binarios/redBlackTree';

export default function RedBlackTree () {
    const [redBlackTree, setRedBlackTree] = useState(constRedBlackTree);

    useEffect(() => {
        setRedBlackTree(constRedBlackTree)
    }, [constRedBlackTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/red-black-tree/description.md" first={true}/>,
        ope: <Section url="/markdown/red-black-tree/operations.md" first={true}/>,
        impl: <Section url="/markdown/red-black-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={redBlackTree}
                    setData={setRedBlackTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <RedBlackTreeDownloads />
                </div>
            </div>
        </main>
    );
}