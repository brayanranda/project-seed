import { faSeedling, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classCircle } from "../../../utilities/const";

export default function Slider() {
    return(
        <section className="w-full relative overflow-hidden">
            <article className="text-white mx-auto w-11/12 md:w-9/12 pt-40 pb-20 space-y-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-medium">
                    <p className="opacity-50">Simuladores <br /> para estudio de <br /></p>
                    <p className="opacity-100">Estructuras de Datos</p>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div className="space-y-8">
                        <FontAwesomeIcon className="w-10 md:w-14 h-10 md:h-14 bg-green-500 text-white p-5 rounded-full" icon={faSeedling} />
                        <p>SEED, semilla promotora del estudio de estructuras de Datos elementales, que esta compuesta por un componente en lenguaje JAVA y un conjunto de simuladores. Este mediador pedagógico digital ilustra el comportamiento de las estructuras de manera dinámica y se basan en el componente en JAVA para su funcionamiento.</p>
                    </div>
                    <div className="space-y-8">
                        <FontAwesomeIcon className="w-10 md:w-14 h-10 md:h-14 bg-yellow-400 text-white p-5 rounded-full" icon={faGraduationCap} />
                        <p>SEED se basa en un componente de estructuras de datos implementado en lenguaje JAVA, con el propósito de agrupar diversas estructuras que son analizadas en la formación profesional de los estudiantes de ingeniería de sistemas, desarrollado con fines académicos para promover de manera dinámica los conceptos abstractos y el comportamiento de cada una de las estructuras de datos implementadas en el componente.</p>
                    </div>
                    <div className="space-y-8">
                        <FontAwesomeIcon className="w-10 md:w-14 h-10 md:h-14 bg-cyan-400 text-white p-5 rounded-full" icon={faCode} />
                        <p>Las estructuras que integran SEED son agrupadas en un mismo paquete con el propósito de reutilizar código, para la implementación de otras estructuras de mayor complejidad, todas estás están completamente documentadas, descritas y permiten almacenar cualquier tipo de objeto, además tienen implementadas las operaciones básicas de acuerdo a la naturaleza de cada una de ellas. </p>
                    </div>
                </div>
            </article>
            <div className={`-top-80 right-96 blue${classCircle}`}></div>
            <div className={`-bottom-80 -right-40 pink${classCircle}`}></div>
        </section>
    );
}