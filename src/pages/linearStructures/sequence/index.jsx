import Download from "@/components/ui/Download/Download";
import Section from "@/components/ui/Section";
import TitleMd from "@/components/ui/TitleMd";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import { faPlus, faEdit, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import CodeRunner from "@/components/ui/codeRunner";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_SEC } from "@/store/services/servicios";

export default function Sequence() {
    const tabs = [
        {
            name: "Insertar",
            icon: faPlus,
            url: "/markdown/sequence/insert.md",
            runner: "/code-runner/sequence/Insertar.java"
        },
        {
            name: "Editar",
            icon: faEdit,
            url: "/markdown/sequence/edit.md",
            runner: "/code-runner/sequence/Editar.java"
        },
        {
            name: "Consultar",
            icon: faMagnifyingGlass,
            url: "/markdown/sequence/search.md",
        },
        {
            name: "Eliminar",
            icon: faTrash,
            url: "/markdown/sequence/delete.md",
        }
    ]

    const downloads = [
        {
            title: "Material de Teoría de Secuencia",
            url: "/contenido/recurso/SECUENCIA.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para Secuencia",
            url: "/contenido/JARS/SimSecuencia.zip",
        },
        {
            title: "Manual de Usuario del Simulador de Secuencia",
            url: "/contenido/JARS/SimSecuencia.zip",
        },
    ]

    return (
        <main className="bg-seed text-white">
            <Section url="/markdown/sequence/description.md" first={true} last={true} />
            <section className="w-full bg-white py-20 text-black relative z-20">
                <article className="mx-auto w-11/12 md:w-8/12 lg:w-6/12">
                    <TitleMd title="Operaciones" type={2} />
                    <TabsComponentMd data={tabs} />
                </article>
            </section>
            <Section url="/markdown/sequence/implementation.md" first={true} last={false} />
            <Analisis 
                id={0} 
                servicio_markdown={getAnalisis_SEC} 
                title="Secuencia en SEED" 
                sub_title="Costo Operacional y Complejidad de" 
                first={false} 
                last={true} 
                startLeft={true} 
            />
            <Download data={downloads} />
        </main>
    );
}