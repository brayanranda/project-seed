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
        col: <div>
                <Section url="/markdown/queue/description.md" first={true}/>
                <Section url="/markdown/queue/implementation.md" />
                <Analisis 
                    id={0} 
                    servicio_markdown={getAnalisis_COLAS} 
                    title="Cola en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                />
            </div>,
        colp: <div className="pt-40">
                <Section url="/markdown/queue/description-priority.md" startLeft={true}/>
                <Section url="/markdown/queue/implementation-priority.md"/>
                <Analisis 
                    id={1} 
                    servicio_markdown={getAnalisis_COLASP} 
                    title="Cola de Prioridad en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                    last={true}
                />
            </div>,
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