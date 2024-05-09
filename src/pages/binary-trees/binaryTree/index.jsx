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
        rec: <Section url="/markdown/binary-tree/recorrido.md" first={true} />,
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