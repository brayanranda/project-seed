import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_COLAS, getAnalisis_COLASP } from "@/store/services/servicios";
import QueueDownloads from "./QueueDownloads";
import { constColas } from "@/utilities/aside/estructuras_lineales/colas";
import { useEffect, useState } from "react";
import Template from "@/components/Layout/Template";

export default function Queue() {
    const [asideQueue, setAsideQueue] = useState(constColas);

    useEffect(() => {
        setAsideQueue(constColas)
    }, [constColas]);


    const [viewTypeComponent, setViewTypeComponent] = useState("col");
    const viewComponents = {
        col: <>
            <Section
                showBtnModal={true}
                titleBtn="Cola"
                typeModal="/code-runner/colas/Cola.java"

                url="/markdown/queue/description.md"
                first={true}
            />
        </>,
        implementacionCola: <Section url="/markdown/queue/implementation.md" first={true} />,
        costoComplejidadCola: <Analisis
            id={0}
            title="Cola en SEED"
            servicio_markdown={getAnalisis_COLAS}
            sub_title="Costo Operacional y Complejidad de"
        />,
        colp: <>
            <Section
                // showBtnModal={true}
                titleBtn="Cola P"
                typeModal="/code-runner/colas/ColaP.java"

                url="/markdown/queue/description-priority.md"
                first={true} startLeft={true}
            />
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