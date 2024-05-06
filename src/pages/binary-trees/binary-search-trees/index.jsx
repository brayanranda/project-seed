import Section from "@/components/ui/Section";
import BinarySearchTreeDownloads from "./BinarySearchTreeDownloads";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";
import { useEffect, useState } from "react";
import { constBinarySearchTree } from "@/utilities/aside/arboles_binarios/binarySearchTree";

export default function BinarySearchTree () {
    const [asideBinarySearchTree, setAsideBinarySearchTree] = useState(constBinarySearchTree);

    useEffect(() => {
        setAsideBinarySearchTree(constBinarySearchTree)
    }, [constBinarySearchTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("abb");
    const viewComponents = {
        abb: <Section url="/markdown/binary-search-tree/description.md" first={true}/>,
        ope: <Section url="/markdown/binary-search-tree/operaciones.md" first={true} />,
        impl: <Section url="/markdown/binary-search-tree/implementation.md" first={true} last={true}/>,
    }
    
    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideBinarySearchTree}
                    setData={setAsideBinarySearchTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <BinarySearchTreeDownloads />
                </div>
            </div>
        </main>
    );
}