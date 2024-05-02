import Download from "@/components/ui/Download/Download";

function NaryDownloads() {
    const downloads = [
        {
            title: "Material Arbol Eneario",
            url: "/contenido/recurso/ARBOLENEARIO.zip",
        },
        {
            title: "Componente SEED - UFPS",
            url: "/contenido/componente/SEED_UFPS.zip",
        },
        {
            title: "Simulador para ArbolEneario",
            url: "/contenido/JARS/SimArbolEnearioGeneral.zip",
        },
    ]

    return (
        <Download data={downloads} />
    );
}

export default NaryDownloads;