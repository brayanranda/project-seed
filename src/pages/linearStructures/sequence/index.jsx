import Download from "../../../components/ui/Download/Download";
import Title from "../../../components/ui/title";
import Description from "./description";
import Implementation from "./implementation";
import Operations from "./operations";

export default function Sequence () {
    const data = [
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

    return(
        <main className="bg-seed text-white mt-40 relative">
            <Title
                title="Secuencia"
                sub_title="Estructuras Lineales"
            />
            <Description />
            <Operations />
            <Implementation />
            <Download data={data} />
        </main>
    );
}