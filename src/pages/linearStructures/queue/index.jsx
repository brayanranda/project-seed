import Download from "../../../components/ui/Download/Download";
import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_COLAS, getAnalisis_COLASP } from "@/store/services/servicios";

export default function Queue () {
    const data = [
        {
            title: "Material de Teoría de Colas",
            url: "/contenido/recurso/COLAS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simuladores para Colas",
            url: "/contenido/JARS/Colas.zip",
        },
    ]
    return(
        <main className="bg-seed text-white">
            <div>
                <Section url="/markdown/queue/description.md" first={true}/>
                <Section url="/markdown/queue/implementation.md" />
                <Analisis 
                    id={0} 
                    servicio_markdown={getAnalisis_COLAS} 
                    title="Cola en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                />
            </div>
            <div>
                <Section url="/markdown/queue/description-priority.md" startLeft={true}/>
                <Section url="/markdown/queue/implementation-priority.md"/>
                <Analisis 
                    id={1} 
                    servicio_markdown={getAnalisis_COLASP} 
                    title="Cola de Prioridad en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                    last={true}
                />
            </div>
            <Download data={data} />
        </main>
    );
}