import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_HASH } from "@/store/services/servicios";
import HashTableDownloads from "./HashTableDownloads";
import { useEffect, useState } from "react";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";
import { constTablaHash } from "@/utilities/aside/estructuras_lineales/tabla_hash";

export default function HashTable () {

    const [asideHashTable, setAsideHashTable] = useState(constTablaHash);

    useEffect(() => {
        setAsideHashTable(constTablaHash)
    }, [constTablaHash]);

    const [viewTypeComponent, setViewTypeComponent] = useState("tabH");
    const viewComponents = {
        tabH: <Section url="/markdown/hash-table/description.md" first={true}/>,
        ope: <Section url="/markdown/hash-table/operaciones.md" first={true}/>,
        cosCom: <>
            <Analisis 
                id={0} 
                servicio_markdown={getAnalisis_HASH} 
                title="Tabla Hash en SEED" 
                sub_title="Costo Operacional y Complejidad de" 
                last={true}
            />
        </>,
        impl: <div className="pt-40">
            <Section url="/markdown/hash-table/implementation.md" />
        </div>,
    }
    
    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideHashTable}
                    setData={setAsideHashTable}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-10/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <HashTableDownloads />
                </div>
            </div>
        </main>
    );
}