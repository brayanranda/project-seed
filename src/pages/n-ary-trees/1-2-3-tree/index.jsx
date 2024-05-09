import Section from "@/components/ui/Section";
import { consArbol123Tree } from "@/utilities/aside/arboles_enearios/arbol_123";
import Tree123Downloads from "./Tree123Downloads";
import React, { useState, useEffect } from 'react';
import Template from "@/components/Layout/Template";

export default function OneTwoThreeTree () {
    const [tree123, setTree123] = useState(consArbol123Tree);

    useEffect(() => {
        setTree123(consArbol123Tree)
    }, [consArbol123Tree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/1-2-3-tree/description.md" first={true}/>,
        car: <Section url="/markdown/1-2-3-tree/caracteristicas.md" first={true}/>,
        impl: <Section url="/markdown/1-2-3-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <Template
            data={tree123}
            setData={setTree123}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <Tree123Downloads/>
        </Template>
    )
}