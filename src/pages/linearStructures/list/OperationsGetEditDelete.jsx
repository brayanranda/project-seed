import { faEdit, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import TitleMd from "@/components/ui/TitleMd";

function OperationsGetEditDelete() {
    const tabs = [
        {
            name: "Editar",
            icon: faEdit,
            url: "/markdown/list/edit.md",
            runner: "/code-runner/list/Editar.java"
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

    return (
        <section className="w-full pb-20 relative z-20">
            <article className="mx-auto w-11/12 md:w-10/12">
                <TitleMd title="Operaciones Editar, Consultar y Eliminar" type={2} />
                <TabsComponentMd data={tabs} />
            </article>
        </section>
    );
}

export default OperationsGetEditDelete;