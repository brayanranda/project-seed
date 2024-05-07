import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TabsComponentMd from "@/components/ui/TabsComponentMd";
import TitleMd from "@/components/ui/TitleMd";

function ListOperations() {
    const tabs = [
        {
            name: "Insertar Inicio",
            icon: faPlus,
            url: "/markdown/list/insert.md",
            runner: "/code-runner/list/InsertarInicio.java"
        },
        {
            name: "Insertar Final",
            icon: faPlus,
            url: "/markdown/list/insert.md",
            runner: "/code-runner/list/InsertarFinal.java"
        },
        {
            name: "Insertar Ordenado",
            icon: faPlus,
            url: "/markdown/list/insert.md",
            runner: "/code-runner/list/InsertarOrdenado.java"
        },
    ]

    return (
        <section className="w-full pt-40 pb-20 relative z-20">
            <article className="mx-auto w-11/12 md:w-10/12">
                <TitleMd title="Operaciones de Insertar" type={2} />
                <TabsComponentMd data={tabs} />
            </article>
        </section>
    );
}

export default ListOperations;