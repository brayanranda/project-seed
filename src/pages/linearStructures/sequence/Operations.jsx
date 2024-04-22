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
        },
        {
            name: "Eliminar",
            icon: faTrash,
            url: "/markdown/sequence/delete.md",
        }
    ]

    return (
        <section className="w-full bg-white py-20 text-black relative z-20">
            <article className="mx-auto w-11/12 md:w-9/12">
                <TitleMd title="Operaciones" type={2} />
                <TabsComponentMd data={tabs} />
            </article>
        </section>
    );
}

export default SequenceOperations;