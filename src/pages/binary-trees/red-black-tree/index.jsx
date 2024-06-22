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
        ope: 
        <>
            <Section url="/markdown/red-black-tree/operations.md" first={true}/>
            <Section
                // showBtnModal={true}
                titleBtn="Insertar - Árbol Rojo y Negro"
                typeModal="/code-runner/arbolRojoNegro/Insertar.java"
                url="/markdown/red-black-tree/insertar.md"
            />
            <Section
                // showBtnModal={true}
                titleBtn="Eliminar - Árbol Rojo y Negro"
                typeModal="/code-runner/arbolRojoNegro/Eliminar.java"
                url="/markdown/red-black-tree/eliminar.md"
            />
        </>,
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