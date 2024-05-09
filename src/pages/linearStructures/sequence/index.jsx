import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_SEC } from "@/store/services/servicios";
import { useEffect, useState } from "react";
import SequenceDownloads from "./SequenceDownloads";
import SequenceOperations from "./Operations";
import { constSecuencia } from "@/utilities/aside/estructuras_lineales/secuencia";
import Template from "@/components/Layout/Template";


export default function Sequence() {
    const [asideSecuencia, setAsideSecuencia] = useState(constSecuencia);

    useEffect(() => {
        setAsideSecuencia(constSecuencia)
    }, [constSecuencia]);

    const [viewTypeComponent, setViewTypeComponent] = useState("sec");
    const viewComponents = {
        sec: <Section url="/markdown/sequence/description.md" first={true} last={true} />,
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
        <Template
            data={asideSecuencia}
            setData={setAsideSecuencia}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <SequenceDownloads />
        </Template>
    );
}