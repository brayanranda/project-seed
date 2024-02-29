import Download from "@/components/ui/Download/Download";
import Section from "@/components/ui/Section";

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
            <Section url="/markdown/hash-table/implementation.md" last={true}/>
            <Download data={data} />
        </main>
    );
}