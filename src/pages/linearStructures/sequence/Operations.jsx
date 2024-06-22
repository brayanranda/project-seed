import { faPlus, faEdit, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import TitleMd from "@/components/ui/TitleMd";

function SequenceOperations() {
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
            runner: "/code-runner/sequence/Consultar.java"
        },
        {
            name: "Eliminar",
            icon: faTrash,
            url: "/markdown/sequence/delete.md",
            runner: "/code-runner/sequence/Eliminar.java"
        }
    ]

    return (
        <section className="w-full text-white pb-20 z-10 relative">
            <article className="mx-auto md:mt-40 w-11/12 md:w-10/12">
                <TitleMd color="text-white" title="Operaciones" type={2} />
                <TabsComponentMd data={tabs} />
            </article>
        </section>
    );
}

export default SequenceOperations;