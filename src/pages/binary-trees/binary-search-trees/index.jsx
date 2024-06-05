import Section from "@/components/ui/Section";
import BinarySearchTreeDownloads from "./BinarySearchTreeDownloads";
import { useEffect, useState } from "react";
import { constBinarySearchTree } from "@/utilities/aside/arboles_binarios/binarySearchTree";
import Template from "@/components/Layout/Template";
import ModalPythonTutor from "@/components/ui/ModalPythonTutor";

export default function BinarySearchTree () {
    const [asideBinarySearchTree, setAsideBinarySearchTree] = useState(constBinarySearchTree);
    const [modal, setModal] = useState(false);
    const [stringModal, setStringModal] = useState("");
    useEffect(() => {
        setAsideBinarySearchTree(constBinarySearchTree)
    }, [constBinarySearchTree]);
    const showModal = () => {
        setModal(!modal)
    }
    const typeModal = {
        insertar: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/binarySearchTree/insertar.java" />,
        eliminar: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/binarySearchTree/eliminar.java" />,
    }
    const [viewTypeComponent, setViewTypeComponent] = useState("abb");
    const viewComponents = {
        abb: <Section url="/markdown/binary-search-tree/description.md" first={true}/>,
        ope: <>
            <Section url="/markdown/binary-search-tree/operaciones.md" first={true} notPb={true} />
            <Section
                showBtnModal={true}
                showModal={showModal}
                titleBtn="Insertar - Árbol binario de búsqueda"
                setStringModal={setStringModal}
                typeModal="insertar"

                url="/markdown/binary-search-tree/insertar.md"
            />
            <Section
                showBtnModal={true}
                showModal={showModal}
                titleBtn="Eliminar - Árbol binario de búsqueda"
                setStringModal={setStringModal}
                typeModal="eliminar"

                url="/markdown/binary-search-tree/eliminar.md"
            />
        </>,
        impl: <Section url="/markdown/binary-search-tree/implementation.md" first={true} last={true}/>,
    }
    
    return(
        <Template
            typeModal={typeModal}
            stringModal={stringModal}

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