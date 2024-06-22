import { constSplayTree } from "@/utilities/aside/arboles_binarios/splayTree";
import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import SplayTreeDownloads from "./SplayTreeDownloads";
import Template from "@/components/Layout/Template";

export default function SplayTree () {
    const [splayTree, setSplayTree] = useState(constSplayTree);
   
    useEffect(() => {
        setSplayTree(constSplayTree)
    }, [constSplayTree]);
    
    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/splay-tree/description.md" first={true}/>,
        eje: <Section url="/markdown/splay-tree/example.md" first={true}/>,
        ope: 
        <>
            <Section
                // showBtnModal={true}
                titleBtn="Insertar - Árbol Splay"
                typeModal="/code-runner/arbolSplay/Insertar.java"
                url="/markdown/splay-tree/insertar.md" 
                first={true}
            />
            <Section 
                // showBtnModal={true}
                titleBtn="Búsqueda - Árbol Splay"
                typeModal="/code-runner/arbolSplay/Busqueda.java"
                url="/markdown/splay-tree/busqueda.md"
            />
            <Section 
                // showBtnModal={true}
                titleBtn="Eliminar - Árbol Splay"
                typeModal="/code-runner/arbolSplay/Eliminar.java"
                url="/markdown/splay-tree/eliminar.md"
            />
        </>,
        impl: <Section url="/markdown/splay-tree/implementation.md" first={true} last={true}/>,
    }

    return(
        <Template
            data={splayTree}
            setData={setSplayTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <SplayTreeDownloads/>
        </Template>
    );
}