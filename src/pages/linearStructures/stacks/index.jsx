import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_PILAS } from "@/store/services/servicios";
import { constPilas } from "@/utilities/aside/estructuras_lineales/pilas";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";

export default function Queue () {
    const [asideStacks, setAsideStacks] = useState(constPilas);
    
    useEffect(() => {
        setAsideStacks(constPilas)
    }, [constPilas]);

    const [viewTypeComponent, setViewTypeComponent] = useState("pil");
    const viewComponents = {
        pil: <Section url="/markdown/stack/description.md" first={true} />,
        impl: <Section url="/markdown/stack/implementation.md" first={true} />,
        cosCom: <Analisis 
                id={0} 
                servicio_markdown={getAnalisis_PILAS} 
                title="Pila en SEED" 
                sub_title="Costo Operacional y Complejidad de" 
                last={true}
            />,
    }

    return(
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideStacks}
                    setData={setAsideStacks}
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