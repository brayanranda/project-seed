import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_COLAS, getAnalisis_COLASP } from "@/store/services/servicios";
import QueueDownloads from "./QueueDownloads";
import { constColas } from "@/utilities/aside/estructuras_lineales/colas";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import { useEffect, useState } from "react";

export default function Queue () {
    const [asideQueue, setAsideQueue] = useState(constColas);

    useEffect(() => {
        setAsideQueue(constColas)
    }, [constColas]);

    const [viewTypeComponent, setViewTypeComponent] = useState("col");
    const viewComponents = {
        col: <Section url="/markdown/queue/description.md" first={true}/>,
        implementacionCola: <Section url="/markdown/queue/implementation.md" first={true} />,
        costoComplejidadCola: <Analisis 
            id={0} 
            title="Cola en SEED" 
            servicio_markdown={getAnalisis_COLAS} 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        colp: <Section url="/markdown/queue/description-priority.md" first={true} startLeft={true}/>,
        implementacionColaPrioridad: <Section url="/markdown/queue/implementation-priority.md" first={true} />,
        costoComplejidadColaPrioridad: <Analisis 
            id={1} 
            servicio_markdown={getAnalisis_COLASP} 
            title="Cola de Prioridad en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
            last={true}
        />,
    }
    
    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideQueue}
                    setData={setAsideQueue}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-10/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <QueueDownloads />
                </div>
            </div>
        </main>
    );
}