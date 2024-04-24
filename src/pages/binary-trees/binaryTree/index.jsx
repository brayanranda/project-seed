import { constBinaryTree } from "@/utilities/aside/arboles_binarios/binaryTree";
import Section from "@/components/ui/Section";
import BinaryTreeDownloads from "./BinaryTreeDownloads";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import { useEffect, useState } from "react";

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
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideBinartTree}
                    setData={setAsideBinartTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-10/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <BinaryTreeDownloads />
                </div>
            </div>
        </main>
    );
}