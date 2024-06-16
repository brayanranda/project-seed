import Section from "@/components/ui/Section";
import BinarySearchTreeDownloads from "./BinarySearchTreeDownloads";
import { useEffect, useState } from "react";
import { constBinarySearchTree } from "@/utilities/aside/arboles_binarios/binarySearchTree";
import Template from "@/components/Layout/Template";


export default function BinarySearchTree () {
    const [asideBinarySearchTree, setAsideBinarySearchTree] = useState(constBinarySearchTree);

    useEffect(() => {
        setAsideBinarySearchTree(constBinarySearchTree)
    }, [constBinarySearchTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("abb");
    const viewComponents = {
        abb: <Section url="/markdown/binary-search-tree/description.md" first={true}/>,
        ope: <>
            <Section url="/markdown/binary-search-tree/operaciones.md" first={true} notPb={true} />
            <Section
                showBtnModal={true}
                titleBtn="Insertar - Árbol binario de búsqueda"
                typeModal="/code-runner/arbolBinarioBusqueda/insertar.java"

                url="/markdown/binary-search-tree/insertar.md"
            />
            <Section
                showBtnModal={true}
                titleBtn="Eliminar - Árbol binario de búsqueda"
                typeModal="/code-runner/arbolBinarioBusqueda/eliminar.java"

                url="/markdown/binary-search-tree/eliminar.md"
            />
        </>,
        impl: <Section url="/markdown/binary-search-tree/implementation.md" first={true} last={true}/>,
    }
    
    return(
        <Template
            data={asideBinarySearchTree}
            setData={setAsideBinarySearchTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <BinarySearchTreeDownloads/>
        </Template>
    );
}