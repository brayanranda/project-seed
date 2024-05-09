import Section from "@/components/ui/Section";
import Analisis from "@/components/ui/Analisis";
import { getAnalisis_LS, getAnalisis_LD, getAnalisis_LCS, getAnalisis_LCD } from "@/store/services/servicios";
import ListDownloads from "./ListDownloads";
import { useEffect, useState } from "react";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import ListOperations from "./Operations";
import { constLista } from "@/utilities/aside/estructuras_lineales/listas";
import OperationsGetEditDelete from "./OperationsGetEditDelete";
import AsideMobile from "@/components/ui/AsideMobile";
import FrameCode from "../../../components/ui/FrameCode";

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
        lde: <Section url="/markdown/list/lista_doble.md" first={true} />,
        implemeListDoble: <Section url="/markdown/list/implementacion_list_doble.md" first={true} />,
        costoComplejidadListDoble: <Analisis 
            id={1} 
            servicio_markdown={getAnalisis_LD} 
            title="Lista Doble en SEED" 
            sub_title="Costo Operacional y Complejidad de" 
        />,
        lc: <>
            <Section url="/markdown/list/lista_circular.md" first={true} />
            <FrameCode url="/code-runner/listaCircular/ListaCircular.java" />
            <Section url="/markdown/list/list_circular_eliminar.md" notPb={true} />
            <FrameCode url="/code-runner/listaCircular/Eliminar.java" />
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
            <FrameCode url="/code-runner/listaCircularDoble/ListaCircularDoble.java" />
            <Section url="/markdown/list/lista_circular_doble_eliminar.md" notPb={true} />
            <FrameCode url="/code-runner/listaCircularDoble/EliminarCD.java" />
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function checkIfMobile() {
          const mobile = window.innerWidth < 768;
          if (mobile !== isMobile) {
            setIsMobile(mobile);
          }
        }
        checkIfMobile();
    
        window.addEventListener('resize', checkIfMobile);
    
        return () => {
          window.removeEventListener('resize', checkIfMobile);
        };
    }, [isMobile]);

    return (
        <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex flex-col md:flex-row gap-2 relative">
                {isMobile 
                    ?   <AsideMobile
                            data={asideList}
                            setData={setAsideList}
                            setViewTypeComponent={setViewTypeComponent}
                        /> 
                    :  <Aside
                            data={asideList}
                            setData={setAsideList}
                            setViewTypeComponent={setViewTypeComponent}
                        />
                }
                <div className="w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    <ListDownloads />
                </div>
            </div>
        </main>
    );
}