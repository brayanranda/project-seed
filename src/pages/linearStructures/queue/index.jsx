import Download from "../../../components/ui/Download/Download";
import { classCircle } from "@/utilities/const";
import Section from "@/components/ui/Section";

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
            <Section url="/markdown/queue/description.md" first={true}/>
            <Section url="/markdown/queue/implementation.md"/>
            <Section url="/markdown/queue/description-priority.md" startLeft={true}/>
            <Section url="/markdown/queue/implementation-priority.md" last={true}/>
            <Download data={data} />
        </main>
    );
}