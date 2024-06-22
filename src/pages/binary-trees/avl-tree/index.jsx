import Section from "@/components/ui/Section";
import { useEffect, useState } from "react";
import AvlTreeDownloads from "./AvlTreeDownloads";
import { constAvlTree } from "@/utilities/aside/arboles_binarios/avlTree";
import Template from "@/components/Layout/Template";

export default function AVLTree () {
    const [asideAvlTree, setAsideAvlTree] = useState(constAvlTree);

    useEffect(() => {
        setAsideAvlTree(constAvlTree)
    }, [constAvlTree]);

    const [viewTypeComponent, setViewTypeComponent] = useState("arb");
    const viewComponents = {
        arb: <Section url="/markdown/avl-tree/description.md" first={true}/>,
        balA: 
            <Section
                // showBtnModal={true}
                titleBtn="Balancear - Árbol AVL"
                typeModal="/code-runner/arbolAVL/Balancear.java"
                url="/markdown/avl-tree/balancer.md"
                first={true}
            />,
        eliD: 
            <Section
                // showBtnModal={true}
                titleBtn="Eliminar - Árbol AVL"
                typeModal="/code-runner/arbolAVL/Eliminar.java"
                url="/markdown/avl-tree/eliminar.md"
                first={true}
            />,
        impl: <Section url="/markdown/avl-tree/implementation.md" first={true} last={true}/>,
    }
    
    return(
        <Template
            data={asideAvlTree}
            setData={setAsideAvlTree}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <AvlTreeDownloads/>
        </Template>
    );
}