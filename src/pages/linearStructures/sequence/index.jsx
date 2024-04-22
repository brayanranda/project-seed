import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_SEC } from "@/store/services/servicios";
import Background from "@/components/ui/Background";
import Aside from "@/components/ui/Aside";
import { useState } from "react";
import SequenceDownloads from "./SequenceDownloads";
import SequenceOperations from "./Operations";

export default function Sequence() {
    const [asideSecuencia, setAsideSecuencia] = useState(
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
                key: "impl",
                title: "Implementación",
                state: false,
            },
            {
                key: "coscom",
                title: "Costo & Complejidad",
                state: false,
            }
        ]
    );

    const [viewTypeComponent, setViewTypeComponent] = useState("est");
    const viewComponents = {
        est: <Section url="/markdown/sequence/description.md" first={true} last={true} />,
        ope: <SequenceOperations />,
        impl: <Section url="/markdown/sequence/implementation.md" first={true} last={false} />,
        coscom: <Analisis 
            id={0} 
            servicio_markdown={getAnalisis_SEC} 
            title="Secuencia en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
            first={false} 
            last={true} 
            startLeft={true} 
        />,
    }

    return (
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex gap-2 relative">
                <Aside
                    data={asideSecuencia}
                    setAsideSecuencia={setAsideSecuencia}
                    setViewTypeComponent={setViewTypeComponent}
                />
                <div className="w-10/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <SequenceDownloads />
                </div>
            </div>
        </main>
    );
}