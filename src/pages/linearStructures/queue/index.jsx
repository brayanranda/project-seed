import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_COLAS, getAnalisis_COLASP } from "@/store/services/servicios";
import QueueDownloads from "./QueueDownloads";
import { constColas } from "@/utilities/aside/estructuras_lineales/colas";
import { useEffect, useState } from "react";
import FrameCode from "../../../components/ui/FrameCode";
import Template from "@/components/Layout/Template";

export default function Queue() {
    const [asideQueue, setAsideQueue] = useState(constColas);

    useEffect(() => {
        setAsideQueue(constColas)
    }, [constColas]);

    const [viewTypeComponent, setViewTypeComponent] = useState("col");
    const viewComponents = {
        col: <>
            <Section url="/markdown/queue/description.md" first={true} />
            <FrameCode url="/code-runner/colas/Cola.java" />
        </>,
        implementacionCola: <Section url="/markdown/queue/implementation.md" first={true} />,
        costoComplejidadCola: <Analisis
            id={0}
            title="Cola en SEED"
            servicio_markdown={getAnalisis_COLAS}
            sub_title="Costo Operacional y Complejidad de"
        />,
        colp: <>
            <Section url="/markdown/queue/description-priority.md" first={true} startLeft={true} />
            <FrameCode url="/code-runner/colas/ColaP.java" />
        </>,
        implementacionColaPrioridad: <Section url="/markdown/queue/implementation-priority.md" first={true} />,
        costoComplejidadColaPrioridad: <Analisis
            id={1}
            servicio_markdown={getAnalisis_COLASP}
            title="Cola de Prioridad en SEED"
            sub_title="Costo Operacional y Complejidad de"
            last={true}
        />,
    }
    return (
        <Template
            data={asideQueue}
            setData={setAsideQueue}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <QueueDownloads/>
        </Template>
    );
}