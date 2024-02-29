import { structures } from "../../../utilities/structures";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { classCircle } from "../../../utilities/const";
import BlueLine from "../../../components/ui/BlueLine";

export default function Structures() {

    return(
        <section className="w-full relative overflow-hidden">
            <article className="w-11/12 md:w-9/12 mx-auto space-y-6 text-white py-20 relative z-10">
                <p className="text-2xl font-medium w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
                    Tras la realización de encuestas a los docentes, investigación y análisis de las estructuras de datos estudiadas en las asignaturas Estructura de Datos, 
                </p>
                <p className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5">
                    Análisis y Diseño de Algoritmos y Teoría de Grafos por parte del grupo investigador las estructuras de datos que serán implementadas en SEED, serán las siguientes:
                </p>
                <BlueLine />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        structures.map((structure, index) => 
                            <div className="space-y-10 lg:space-y-20" key={index}>
                                <div className={`space-y-6 ${index === 3 ? "block lg:hidden" : ""}`} key={index}>
                                    <p className="text-3xl font-medium">{structure.name}</p>
                                    <ul className="space-y-2">
                                        {
                                            structure.data.map((item, x) => 
                                                <li key={x} className="flex items-center gap-3">
                                                    <FontAwesomeIcon className="text-cyan-400" icon={faStarOfLife} /> {item}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                {
                                    index === 2 &&
                                        <div className="space-y-6 hidden lg:block">
                                            <p className="text-3xl font-medium">Teoría de Grafos</p>
                                            <ul className="space-y-2">
                                                <li className="flex items-center gap-3">
                                                    <FontAwesomeIcon className="text-cyan-400" icon={faStarOfLife} /> Grafo No Dirigido
                                                </li>
                                            </ul>
                                        </div>
                                }
                            </div>
                        )
                    }
                </div>
            </article>
            <div className={`-bottom-80 -left-40 pink${classCircle}`}></div>
            <div className={`-top-80 -right-40 left-auto bottom-auto yellow${classCircle}`}></div>
        </section>
    );
}