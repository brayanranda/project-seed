import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_PILAS } from "@/store/services/servicios";
import { constPilas } from "@/utilities/aside/estructuras_lineales/pilas";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";
import FrameCode from "../../../components/ui/FrameCode";
import Template from "@/components/Layout/Template";

export default function Queue() {
    const [asideStacks, setAsideStacks] = useState(constPilas);

    useEffect(() => {
        setAsideStacks(constPilas)
    }, [constPilas]);

    const [viewTypeComponent, setViewTypeComponent] = useState("pil");
    const viewComponents = {
        pil: <>
            <Section url="/markdown/stack/description.md" first={true} notPb={true} />
            <FrameCode url="/code-runner/stacks/Apilar.java" />
            <Section url="/markdown/stack/desapilar.md" notPb={true} />
            <FrameCode url="/code-runner/stacks/Desapilar.java" last={true} />
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
            setData={setAsideStacks}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <ListDownloads/>
        </Template>
    );
}