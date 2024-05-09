import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import NaryDownloads from './NaryDownloads';
import { consEnearioTree } from '@/utilities/aside/arboles_enearios/arbol_eneario';
import Template from '@/components/Layout/Template';

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
        <Template
            data={naryTree}
            setData={setNaryTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <NaryDownloads/>
        </Template>
    )
}