import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_PILAS } from "@/store/services/servicios";
import { constPilas } from "@/utilities/aside/estructuras_lineales/pilas";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";
import FrameCode from "../../../components/ui/FrameCode";
import Template from "@/components/Layout/Template";
import ModalPythonTutor from "@/components/ui/ModalPythonTutor";

export default function Queue() {
    const [asideStacks, setAsideStacks] = useState(constPilas);
    const [modal, setModal] = useState(false);
    const [stringModal, setStringModal] = useState("");

    useEffect(() => {
        setAsideStacks(constPilas)
    }, [constPilas]);

    const showModal = () => {
        setModal(!modal)
    }
    const typeModal = {
        apilar: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/stacks/Apilar.java" />,
        desapilar: <ModalPythonTutor modal={modal} showModal={showModal} url="/code-runner/stacks/Desapilar.java" />,
    }

    const [viewTypeComponent, setViewTypeComponent] = useState("pil");
    const viewComponents = {
        pil: <>
            <Section 
                showBtnModal={true}
                showModal={showModal}
                titleBtn="Apilar"
                setStringModal={setStringModal}
                typeModal="apilar"
                
                first={true}
                notPb={true} 
                url="/markdown/stack/description.md"
            />
            <Section 
                showBtnModal={true}
                showModal={showModal}
                titleBtn="Desapilar"
                setStringModal={setStringModal}
                typeModal="desapilar"

                url="/markdown/stack/desapilar.md"
            />
        </>,
        impl: <Section url="/markdown/stack/implementation.md" first={true} />,
        cosCom: <Analisis
            id={0}
            servicio_markdown={getAnalisis_PILAS}
            title="Pila en SEED"
            sub_title="Costo Operacional y Complejidad de"
            last={true}
        />,
    }

    return (
        <Template
            data={asideStacks}
            typeModal={typeModal}
            setData={setAsideStacks}
            stringModal={stringModal}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <ListDownloads/>
        </Template>
    );
}