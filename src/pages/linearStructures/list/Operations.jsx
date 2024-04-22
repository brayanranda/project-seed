import { faPlus, faEdit, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import TitleMd from "@/components/ui/TitleMd";

function ListOperations() {
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

    return (
        <section className="w-full pt-40 pb-20 relative z-20">
            <article className="mx-auto w-11/12 md:w-10/12">
                <TitleMd title="Operaciones" type={2} />
                <TabsComponentMd data={tabs} />
            </article>
        </section>
    );
}

export default ListOperations;