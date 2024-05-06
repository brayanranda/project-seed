import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_LS, getAnalisis_LD, getAnalisis_LCS, getAnalisis_LCD } from "@/store/services/servicios";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import ListOperations from "./Operations";
import { constLista } from "@/utilities/aside/estructuras_lineales/listas";

export default function List() {
    const [asideList, setAsideList] = useState(constLista);
    
    useEffect(() => {
        setAsideList(constLista)
    }, [constLista]);

    const [viewTypeComponent, setViewTypeComponent] = useState("list");
    const viewComponents = {
        list: <>
                <Section url="/markdown/list/introduction.md" first={true} />
                <Section url="/markdown/list/clasificacion.md" />
            </>,
        ope: <ListOperations />,
        lse: <Section url="/markdown/list/lista_simple.md" first={true} />,
        implemeListSimple: <Section url="/markdown/list/implementacion_list_simple.md" first={true} />,
        costoComplejidadListSimple: <Analisis 
            id={0} 
            servicio_markdown={getAnalisis_LS} 
            title="Lista Simple en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lde: <Section url="/markdown/list/lista_doble.md" first={true} />,
        implemeListDoble: <Section url="/markdown/list/implementacion_list_doble.md" first={true} />,
        costoComplejidadListDoble: <Analisis 
            id={1} 
            servicio_markdown={getAnalisis_LD} 
            title="Lista Doble en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lc: <div>
                <Section url="/markdown/list/lista_circular.md" first={true} />
                <Analisis 
                    id={2} 
                    servicio_markdown={getAnalisis_LCS} 
                    title="Lista Circular Simple en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                />
            </div>,
        lcse: <Section url="/markdown/list/lista_circular_doble.md" first={true} />,
        implemeListCircularDoble: <Section url="/markdown/list/implementacion_list_circular_doble.md" first={true} />,
        costoComplejidadListCircularDoble: <Analisis 
            id={3} 
            servicio_markdown={getAnalisis_LCD} 
            title="Lista Circular Doble en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
            last={true}
        />,
    }

    return (
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideList}
                    setData={setAsideList}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <ListDownloads />
                </div>
            </div>
        </main>
    );
}