import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_LS, getAnalisis_LD, getAnalisis_LCS, getAnalisis_LCD } from "@/store/services/servicios";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";
import ListOperations from "./Operations";
import { constLista } from "@/utilities/aside/estructuras_lineales/listas";
import OperationsGetEditDelete from "./OperationsGetEditDelete";
import Template from "@/components/Layout/Template";

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
            <Section
                first={true}
                showBtnModal={true}
                typeModal="/code-runner/listDoble/InsertarInicio.java"
                titleBtn="Insertar - Lista doble"
                url="/markdown/list/lista_doble.md"
            />
            <Section
                showBtnModal={true}
                titleBtn="Eliminar - Lista doble"
                typeModal="/code-runner/listDoble/EliminarLD.java"
                url="/markdown/list/lista_doble_eliminar.md"
            />
            
        </>,
        implemeListDoble: <Section url="/markdown/list/implementacion_list_doble.md" first={true} />,
        costoComplejidadListDoble: <Analisis 
            id={1} 
            servicio_markdown={getAnalisis_LD} 
            title="Lista Doble en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lc: <>
            <Section
                showBtnModal={true}
                titleBtn="Insertar - Lista Circular"
                typeModal="/code-runner/listaCircular/InsertarLC.java"

                first={true}
                url="/markdown/list/lista_circular.md" 
            />
            <Section
                showBtnModal={true}
                titleBtn="Eliminar - Lista Circular"
                typeModal="/code-runner/listaCircular/EliminarLC.java"
                
                url="/markdown/list/list_circular_eliminar.md" 
            />
        </>,
        implemeListCircular: <Section url="/markdown/list/implementacion_list_circular_simple.md" first={true} />,
        costoComplejidadListCircular: <Analisis 
            id={2} 
            servicio_markdown={getAnalisis_LCS} 
            title="Lista Circular Simple en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lcse: <>
            <Section
                showBtnModal={true}
                titleBtn="Insertar - Lista Circular Doble"
                typeModal="/code-runner/listaCircularDoble/InsertarLCD.java"

                first={true}
                url="/markdown/list/lista_circular_doble.md"
            />
            <Section
                showBtnModal={true}
                titleBtn="Eliminar - Lista Circular Doble"
                typeModal="/code-runner/listaCircularDoble/EliminarLCD.java"

                url="/markdown/list/lista_circular_doble_eliminar.md"
            />
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