import { constBinaryTree } from "@/utilities/aside/arboles_binarios/binaryTree";
import Section from "@/components/ui/Section";
import BinaryTreeDownloads from "./BinaryTreeDownloads";
import { useEffect, useState } from "react";
import Template from "@/components/Layout/Template";
import ModalPythonTutor from "@/components/ui/ModalPythonTutor";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_AB } from "@/store/services/servicios";


export default function BinaryTree () {
    const [asideBinartTree, setAsideBinartTree] = useState(constBinaryTree);
    const [modal, setModal] = useState(false);
    const [stringModal, setStringModal] = useState("");

    useEffect(() => {
        setAsideBinartTree(constBinaryTree)
    }, [constBinaryTree]);

    const showModal = () => {
        setModal(!modal)
    }
    
    const typeModal = {
        preorden: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/arbolBinario/PreOrden.java" />,
        postorden: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/arbolBinario/PostOrden.java" />,
        inorden: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/arbolBinario/InOrden.java" />,
        por_niveles: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/arbolBinario/PorNiveles.java" />,
    }

    const [viewTypeComponent, setViewTypeComponent] = useState("ab");
    const viewComponents = {
        ab: <Section url="/markdown/binary-tree/description.md" first={true} />,
        rec: <>
            <Section
                showBtnModal={true}
                showModal={showModal}
                titleBtn="PreOrden - Árbol binario"
                setStringModal={setStringModal}
                typeModal="preorden"

                url="/markdown/binary-tree/recorrido.md"
                first={true}
            />
            <Section
                showBtnModal={true}
                showModal={showModal}
                titleBtn="PostOrden - Árbol binario"
                setStringModal={setStringModal}
                typeModal="postorden"

                url="/markdown/binary-tree/recorrido_postorden.md"
            />
            <Section
                showBtnModal={true}
                showModal={showModal}
                titleBtn="InOrden - Árbol binario"
                setStringModal={setStringModal}
                typeModal="inorden"

                url="/markdown/binary-tree/recorrido_inorden.md"
            />
            <Section
                showBtnModal={true}
                showModal={showModal}
                titleBtn="Por Niveles - Árbol binario"
                setStringModal={setStringModal}
                typeModal="por_niveles"

                url="/markdown/binary-tree/recorrido_por_niveles.md"
                last={true}
            />
        </>,
        lonIE: <Section url="/markdown/binary-tree/longitud-de-camino-interno-y-externo.md" first={true} />,
        repABM: <Section url="/markdown/binary-tree/representacion.md" first={true} />,
        imp: <Section url="/markdown/binary-tree/implementation.md" first={true} />,
        cosCom: <Analisis
            id={0}
            servicio_markdown={getAnalisis_AB}
            title="Árbol Binario en SEED"
            sub_title="Costo Operacional y Complejidad de"
            last={true}
        />,
    }

    return(
        <Template
            typeModal={typeModal}
            stringModal={stringModal}

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