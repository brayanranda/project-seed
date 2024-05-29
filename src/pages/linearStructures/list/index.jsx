import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_LS, getAnalisis_LD, getAnalisis_LCS, getAnalisis_LCD } from "@/store/services/servicios";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";
import ListOperations from "./Operations";
import { constLista } from "@/utilities/aside/estructuras_lineales/listas";
import OperationsGetEditDelete from "./OperationsGetEditDelete";
import FrameCode from "../../../components/ui/FrameCode";
import Template from "@/components/Layout/Template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function List() {
    const [asideList, setAsideList] = useState(constLista);
    const [modal, setModal] = useState(false);
    
    useEffect(() => {
        setAsideList(constLista)
    }, [constLista]);

    const showModal = () => {
        setModal(!modal)
    }

    const [viewTypeComponent, setViewTypeComponent] = useState("list");
    const viewComponents = {
        list: <>
                <Section url="/markdown/list/introduction.md" first={true} />
                <Section url="/markdown/list/clasificacion.md" />
            </>,
        ope: <>
            <ListOperations />
            <OperationsGetEditDelete />
        </>,
        lse: <Section url="/markdown/list/lista_simple.md" first={true} />,
        implemeListSimple: <Section url="/markdown/list/implementacion_list_simple.md" first={true} />,
        costoComplejidadListSimple: <Analisis 
            id={0} 
            servicio_markdown={getAnalisis_LS} 
            title="Lista Simple en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lde: <>
            <Section url="/markdown/list/lista_doble.md" first={true} showModal={showModal} showBtnModal={true} />
            {
                modal &&
                    <div className="bg-black bg-opacity-75 min-h-screen w-full flex items-center justify-center absolute left-0 top-0 z-20">
                        <div className="mx-auto w-10/12 flex flex-col items-end">
                            <button onClick={showModal} className="bg-red-500 py-1 px-3 font-black">
                                <FontAwesomeIcon icon={faX} />
                            </button>
                            <FrameCode url="/code-runner/listDoble/InsertarInicio.java" />
                        </div>
                    </div>
            }
            <Section url="/markdown/list/lista_doble_eliminar.md" notPb={true} />
            <FrameCode url="/code-runner/listDoble/EliminarLD.java" last={true} />
        </>,
        implemeListDoble: <Section url="/markdown/list/implementacion_list_doble.md" first={true} />,
        costoComplejidadListDoble: <Analisis 
            id={1} 
            servicio_markdown={getAnalisis_LD} 
            title="Lista Doble en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lc: <>
            <Section url="/markdown/list/lista_circular.md" first={true} />
            <FrameCode url="/code-runner/listaCircular/InsertarLC.java" />
            <Section url="/markdown/list/list_circular_eliminar.md" notPb={true} />
            <FrameCode url="/code-runner/listaCircular/EliminarLC.java" last={true} />
        </>,
        implemeListCircular: <Section url="/markdown/list/implementacion_list_circular_simple.md" first={true} />,
        costoComplejidadListCircular: <Analisis 
            id={2} 
            servicio_markdown={getAnalisis_LCS} 
            title="Lista Circular Simple en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lcse: <>
            <Section url="/markdown/list/lista_circular_doble.md" first={true} />
            <FrameCode url="/code-runner/listaCircularDoble/InsertarLCD.java" />
            <Section url="/markdown/list/lista_circular_doble_eliminar.md" notPb={true} />
            <FrameCode url="/code-runner/listaCircularDoble/EliminarLCD.java" last={true} />
        </>,
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
        <Template
            data={asideList}
            setData={setAsideList}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <ListDownloads/>
        </Template>
    );
}