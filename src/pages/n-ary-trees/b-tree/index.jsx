import Section from "@/components/ui/Section";
import { consArbolB } from "@/utilities/aside/arboles_enearios/arbol_b";
import React, { useState, useEffect } from 'react';
import BTreeDownloads from "./BTreeDownloads";
import Template from "@/components/Layout/Template";

export default function BTree () {
    const [bTree, setBTree] = useState(consArbolB);

    useEffect(() => {
        setBTree(consArbolB)
    }, [consArbolB]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/b-tree/description.md" first={true}/>,
        ope: 
            <Section
                // showBtnModal={true}
                titleBtn="InOrden"
                typeModal="/code-runner/arbolB/Insertar.java"
            
                url="/markdown/b-tree/operaciones.md"
                first={true}
            />,
        impl: <Section url="/markdown/b-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <Template
            data={bTree}
            setData={setBTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <BTreeDownloads/>
        </Template>
    )
}