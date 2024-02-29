import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ImgSlider from '../../assets/images/img_slider.png'
import DevelopmentTeam from "@/components/ui/DevelopmentTeam";
import Background from "@/components/ui/Background";

export default function Home() {
    return(
        <section className="bg-seed flex min-h-screen w-full text-white flex-col relative overflow-hidden">
            <Background
                first={true}
                last={true}
            />
            <article className="flex flex-col justify-between w-full min-h-screen pt-40 xl:pt-20 relative">
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto w-11/12 md:w-11/12 lg:w-9/12 gap-20">
                    <div className="space-y-10 w-full md:w-1/2">
                        <p className="text-xl lg:text-3xl xl:text-4xl">Una forma de aprender <br /> <strong>Estructuras de Datos en Java</strong></p>
                        <p className="text-lg xl:text-xl">Semilla promotora del estudio de estructuras de Datos, compuesta por un componente en lenguaje JAVA y un conjunto de simuladores.</p>
                        <div className="flex flew-col xl:flex-row items-center gap-2 flex-wrap">
                            <Link
                                to="/about"
                                className="cursor-pointer transform hover:scale-105 duration-300 bg-cyan-400 rounded-full py-2 px-4 text-white flex items-center w-fit"
                            >
                                <p className="text-md xl:text-lg font-medium pr-2">Documentación</p>
                                <FontAwesomeIcon icon={faRightLong} className="border-white border-2 text-md rounded-full w-3 h-3 p-2" />
                            </Link>
                            <Link
                                target="_blank"
                                to="https://gitlab.com/estructuras-de-datos/proyecto-seed"
                                className="cursor-pointer transform hover:scale-105 duration-300 bg-white rounded-full py-2 px-4 text-black flex items-center w-fit"
                            >
                                <p className="text-md xl:text-lg font-medium pr-2">Código fuente</p>
                                <FontAwesomeIcon icon={faRightLong} className="border-black border-2 text-md rounded-full w-3 h-3 p-2" />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="w-10/12 text-right object-cover" src={ImgSlider} />
                    </div>
                </div>
                <div className="w-11/12 md:w-11/12 lg:w-9/12 mx-auto flex items-center justify-between pb-6">
                    <p className="text-white font-medium">
                        ©2024 Copyright: <Link to="https://madarme.co/" target="_blank" className="underline">madarme.com</Link>
                    </p>
                    <DevelopmentTeam />
                </div>
            </article>
        </section>
    );
}
