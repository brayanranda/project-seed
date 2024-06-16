import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_HASH } from "@/store/services/servicios";
import HashTableDownloads from "./HashTableDownloads";
import { useEffect, useState } from "react";
import { constTablaHash } from "@/utilities/aside/estructuras_lineales/tabla_hash";
import Template from "@/components/Layout/Template";

export default function HashTable() {

    const [asideHashTable, setAsideHashTable] = useState(constTablaHash);

    useEffect(() => {
        setAsideHashTable(constTablaHash)
    }, [constTablaHash]);

    const [viewTypeComponent, setViewTypeComponent] = useState("tabH");
    const viewComponents = {
        tabH: <Section url="/markdown/hash-table/description.md" first={true} />,
        ope: <Section url="/markdown/hash-table/operaciones.md" first={true} />,
        cosCom: <>
            <Analisis
                id={0}
                servicio_markdown={getAnalisis_HASH}
                title="Tabla Hash en SEED"
                sub_title="Costo Operacional y Complejidad de"
                last={true}
            />
        </>,
        impl: <div className="md:pt-40">
            <Section url="/markdown/hash-table/implementation.md" />
        </div>,
    }
    return (
        <Template
            data={asideHashTable}
            setData={setAsideHashTable}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <HashTableDownloads/>
        </Template>
    );
}