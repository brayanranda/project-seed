import Download from "../../../components/ui/Download/Download";
import Section from "@/components/ui/Section";
import TitleMd from "@/components/ui/TitleMd";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import { faPlus, faEdit, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List() {
    const tabs = [
        {
            name: "Insertar",
            icon: faPlus,
            url: "/markdown/list/insert.md",
        },
        {
            name: "Editar",
            icon: faEdit,
            url: "/markdown/list/edit.md",
        },
        {
            name: "Consultar",
            icon: faMagnifyingGlass,
            url: "/markdown/list/search.md",
        },
        {
            name: "Eliminar",
            icon: faTrash,
            url: "/markdown/list/delete.md",
        }
    ]
    const downloads = [
        {
            title: "Material de Teoría de Listas",
            url: "/contenido/recurso/LISTAS.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simuladores para Listas",
            url: "/contenido/JARS/Listas.zip",
        },
    ]

    return (
        <main className="bg-seed text-white">
            <Section url="/markdown/list/introduction.md" first={true} last={true} />
            <section className="w-full bg-white py-20 text-black relative z-20">
                <article className="mx-auto w-11/12 md:w-8/12 lg:w-6/12">
                    <TitleMd title="Operaciones" type={2} />
                    <TabsComponentMd data={tabs} />
                </article>
            </section>
            <Section url="/markdown/list/content.md" first={true} last={true} />
            <Download data={downloads} />
        </main>
    );
}