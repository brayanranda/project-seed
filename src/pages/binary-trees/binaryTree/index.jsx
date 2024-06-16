import { constBinaryTree } from "@/utilities/aside/arboles_binarios/binaryTree";
import Section from "@/components/ui/Section";
import BinaryTreeDownloads from "./BinaryTreeDownloads";
import { useEffect, useState } from "react";
import Template from "@/components/Layout/Template";

export default function BinaryTree () {
    const [asideBinartTree, setAsideBinartTree] = useState(constBinaryTree);

    useEffect(() => {
        setAsideBinartTree(constBinaryTree)
    }, [constBinaryTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("ab");
    const viewComponents = {
        ab: <Section url="/markdown/binary-tree/description.md" first={true} />,
        rec: <>
            <Section
                showBtnModal={true}
                titleBtn="PreOrden - Árbol binario"
                typeModal="/code-runner/arbolBinario/PreOrden.java"

                url="/markdown/binary-tree/recorrido.md"
                first={true}
            />
            <Section
                showBtnModal={true}
                titleBtn="PostOrden - Árbol binario"
                typeModal="/code-runner/arbolBinario/PostOrden.java"

                url="/markdown/binary-tree/recorrido_postorden.md"
            />
            <Section
                showBtnModal={true}
                titleBtn="InOrden - Árbol binario"
                typeModal="/code-runner/arbolBinario/InOrden.java"

                url="/markdown/binary-tree/recorrido_inorden.md"
            />
            <Section
                showBtnModal={true}
                titleBtn="Por Niveles - Árbol binario"
                typeModal="/code-runner/arbolBinario/PorNiveles.java"

                url="/markdown/binary-tree/recorrido_por_niveles.md"
                last={true}
            />
        </>,
        lonIE: <Section url="/markdown/binary-tree/longitud-de-camino-interno-y-externo.md" first={true} />,
        repABM: <Section url="/markdown/binary-tree/representacion.md" first={true} />,
        imp: <Section url="/markdown/binary-tree/implementation.md" first={true} />,
    }

    return(
        <Template
            data={asideBinartTree}
            setData={setAsideBinartTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <BinaryTreeDownloads/>
        </Template>
    );
}