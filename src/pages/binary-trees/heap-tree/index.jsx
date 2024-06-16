import { constHeapTree } from "@/utilities/aside/arboles_binarios/heapTree";
import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import HeapTreeDownloads from "./HeapTreeDownloads";
import Template from "@/components/Layout/Template";

export default function HeapTree () {
    const [splayTree, setSplayTree] = useState(constHeapTree);
    
    useEffect(() => {
        setSplayTree(constHeapTree)
    }, [constHeapTree]);
    
    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/heap-tree/description.md" first={true}/>,
        ope: 
        <>
            <Section
                showBtnModal={true}
                titleBtn="Insertar - Árbol Heap"
                typeModal="/code-runner/arbolHeap/Insertar.java"
                url="/markdown/heap-tree/operations.md"
                first={true}
            />
            <Section
                showBtnModal={true}
                titleBtn="Eliminar - Árbol Heap"
                typeModal="/code-runner/arbolHeap/Eliminar.java"
                url="/markdown/heap-tree/eliminar.md"
            />
        </>,
        impl: <Section url="/markdown/heap-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <Template
            data={splayTree}
            setData={setSplayTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <HeapTreeDownloads/>
        </Template>
    );
}