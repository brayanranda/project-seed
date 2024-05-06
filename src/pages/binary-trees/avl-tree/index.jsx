import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import Section from "@/components/ui/Section";
import { useEffect, useState } from "react";
import AvlTreeDownloads from "./AvlTreeDownloads";
import { constAvlTree } from "@/utilities/aside/arboles_binarios/avlTree";

export default function AVLTree () {
    const [asideAvlTree, setAsideAvlTree] = useState(constAvlTree);

    useEffect(() => {
        setAsideAvlTree(constAvlTree)
    }, [constAvlTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/avl-tree/description.md" first={true}/>,
        balA: <Section url="/markdown/avl-tree/balancer.md" first={true}/>,
        eliD: <Section url="/markdown/avl-tree/eliminar.md" first={true} />,
        impl: <Section url="/markdown/avl-tree/implementation.md" first={true} last={true}/>,
    }
    
    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideAvlTree}
                    setData={setAsideAvlTree}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <AvlTreeDownloads />
                </div>
            </div>
        </main>
    );
}