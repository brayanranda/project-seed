import { faEdit, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import TitleMd from "@/components/ui/TitleMd";

function OperationsGetEditDelete() {
    const tabs = [
        {
            name: "Editar",
            icon: faEdit,
            url: "/markdown/list/edit.md",
            runner: "/code-runner/list/EditarLS.java"
        },
        {
            name: "Consultar",
            icon: faMagnifyingGlass,
            url: "/markdown/list/search.md",
            runner: "/code-runner/list/ConsultarLS.java"
        },
        {
            name: "Eliminar",
            icon: faTrash,
            url: "/markdown/list/delete.md",
            runner: "/code-runner/list/EliminarLS.java"
        }
    ]

    return (
        <section className="mx-auto w-10/12 pt-20 pb-20 relative z-20 border-cyan-400 border-t-[2px] my-10">
            <TitleMd title="Operaciones Editar, Consultar y Eliminar" type={2} />
            <TabsComponentMd data={tabs} />
        </section>
    );
}

export default OperationsGetEditDelete;