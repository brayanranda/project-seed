import Download from "@/components/ui/Download/Download";
import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_HASH } from "@/store/services/servicios";

export default function HashTable () {
    const data = [
        {
            title: "Material de Teoría de Tabla Hash",
            url: "/contenido/recurso/TABLASHASH.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para una Tabla Hash",
            url: "/contenido/JARS/SimTablaHash.zip",
        },
    ]

    return(
        <main className="bg-seed text-white">
            <Section url="/markdown/hash-table/description.md" first={true}/>
            <Section url="/markdown/hash-table/implementation.md" />
            <Analisis 
                id={0} 
                servicio_markdown={getAnalisis_HASH} 
                title="Tabla Hash en SEED" 
                sub_title="Costo Operacional y Complejidad de" 
                last={true}
            />
            <Download data={data} />
        </main>
    );
}