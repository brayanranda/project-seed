import Download from "../../../components/ui/Download/Download";
import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_PILAS } from "@/store/services/servicios";

export default function Queue () {
    const data = [
        {
            title: "Material de Teoría de Pila",
            url: "/contenido/recurso/PILAS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Pila",
            url: "/contenido/JARS/Pilas.zip",
        }
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/stack/description.md" first={true}/>
            <Section url="/markdown/stack/implementation.md" />
            <Analisis 
                id={0} 
                servicio_markdown={getAnalisis_PILAS} 
                title="Pila en SEED" 
                sub_title="Costo Operacional y Complejidad de" 
                last={true}
            />
            <Download data={data} />
        </main>
    );
}