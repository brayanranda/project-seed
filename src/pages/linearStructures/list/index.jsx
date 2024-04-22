import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_LS, getAnalisis_LD, getAnalisis_LCS, getAnalisis_LCD } from "@/store/services/servicios";
import ListDownloads from "./ListDownloads";
import { useState } from "react";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import ListOperations from "./Operations";

export default function List() {
    const [asideList, setAsideList] = useState(
        [
            {
                key: "est",
                title: "Estructuras Lineales",
                state: true,
            },
            {
                key: "ope",
                title: "Operaciones",
                state: false,
            },
            {
                key: "lse",
                title: "Lista Simplemente Enlazada",
                state: false,
            },
            {
                key: "lde",
                title: "Lista Doblemente Enlazada",
                state: false,
            },
            {
                key: "lcse",
                title: "Lista Circular Simplemente Enlazada",
                state: false,
            }
        ]
    );

    const [viewTypeComponent, setViewTypeComponent] = useState("est");
    const viewComponents = {
        est: <>
                <Section url="/markdown/list/introduction.md" first={true} last={true} />
                <Section url="/markdown/list/clasificacion.md" first={true}/>
            </>,
        ope: <ListOperations />,
        lse: <div className="pt-40">
                <Section url="/markdown/list/lista_simple.md" />
                <Analisis 
                    id={0} 
                    servicio_markdown={getAnalisis_LS} 
                    title="Lista Simple en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                />
            </div>,
        lde: <div className="pt-40">
                <Section url="/markdown/list/lista_doble.md" />
                <Analisis 
                    id={1} 
                    servicio_markdown={getAnalisis_LD} 
                    title="Lista Doble en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                />
            </div>,
        lc: <div className="pt-40">
                <Section url="/markdown/list/lista_circular.md" />
                <Analisis 
                    id={2} 
                    servicio_markdown={getAnalisis_LCS} 
                    title="Lista Circular Simple en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                />
            </div>,
        lcse: <div className="pt-40">
                <Section url="/markdown/list/lista_circular_doble.md" />
                <Analisis 
                    id={3} 
                    servicio_markdown={getAnalisis_LCD} 
                    title="Lista Circular Doble en SEED" 
                    sub_title="Costo Operacional y Complejidad de" 
                    last={true}
                />
            </div>,
    }

    return (
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideList}
                    setAsideSecuencia={setAsideList}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-10/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <ListDownloads />
                </div>
            </div>
        </main>
    );
}