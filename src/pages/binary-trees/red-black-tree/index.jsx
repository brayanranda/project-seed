import React, { useState, useEffect } from 'react';

import Section from "@/components/ui/Section";
import RedBlackTreeDownloads from './RedBlackTreeDownloads';
import { constRedBlackTree } from '@/utilities/aside/arboles_binarios/redBlackTree';
import Template from '@/components/Layout/Template';

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
        <Template
            data={redBlackTree}
            setData={setRedBlackTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <RedBlackTreeDownloads/>
        </Template>
    );
}