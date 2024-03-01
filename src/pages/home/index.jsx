import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ImgSlider from '../../assets/images/img_slider.png'
import DevelopmentTeam from "@/components/ui/DevelopmentTeam";
import Background from "@/components/ui/Background";
import { classCircle } from "@/utilities/const";

export default function Home() {
    const data = [
        {
            url: "/about",
            title: "Documentación",
            style: "cursor-pointer transform hover:scale-105 duration-300 bg-cyan-400 rounded-full py-2 px-4 text-white flex items-center w-fit",
            icon: "border-white border-2 text-md rounded-full w-3 h-3 p-2"
        },
        {
            url: "https://gitlab.com/estructuras-de-datos/proyecto-seed",
            title: "Código fuente",
            style: "cursor-pointer transform hover:scale-105 duration-300 bg-white rounded-full py-2 px-4 text-black flex items-center w-fit",
            icon: "border-black border-2 text-md rounded-full w-3 h-3 p-2"
        },
        {
            url: "https://repositorio.ufps.edu.co/bitstream/handle/ufps/485/SEED.%20A%20software%20tool%20and%20an%20active-learning%20strategy%20for%20data%20structures%20courses.pdf?sequence=1",
            title: "Learning",
            style: "cursor-pointer transform hover:scale-105 duration-300 bg-white rounded-full py-2 px-4 text-black flex items-center w-fit",
            icon: "border-black border-2 text-md rounded-full w-3 h-3 p-2"
        },
    ]
    return(
        <section className="bg-seed flex min-h-screen w-full text-white flex-col justify-between pt-32 lg:pt-20 relative">
            <Background first={true} last={true} startLeft={true}/>
            <div>{/*Trick for flex, to position next article at center*/}</div>
            <article className="flex items-center justify-between mx-auto w-9/12 gap-16 relative flex-col lg:flex-row">
                <div className="space-y-10 lg:w-1/2">
                    <p className="text-2xl lg:text-4xl">Una forma de aprender <br /> <strong>Estructuras de Datos en Java</strong></p>
                    <p className="text-lg lg:text-xl">Semilla promotora del estudio de estructuras de Datos, compuesta por un componente en lenguaje JAVA y un conjunto de simuladores.</p>
                    <div className="flex tems-center gap-2 justify-start flex-col lg:flex-row flex-wrap">
                        {
                            data && data.length > 0 &&
                                data.map((item, index) => 
                                    <Link
                                        key={index}
                                        to={item.url}
                                        className={item.style}
                                        target={index === 0 ? "_self" : "_blank"}
                                    >
                                        <p className="text-lg font-medium pr-2">{item.title}</p>
                                        <FontAwesomeIcon icon={faRightLong} className={item.icon} />
                                    </Link>
                                )
                        }
                    </div>
                </div>
                <img className="w-full lg:w-1/2 object-cover max-w-lg hidden md:block" src={ImgSlider} />
            </article>
            <article className="mx-auto w-9/12 flex items-center justify-between relative py-6">
                <p className="text-white font-medium">
                    ©2024 Copyright: <Link to="https://madarme.co/" target="_blank" className="underline">madarme.com</Link>
                </p>
                <DevelopmentTeam />
            </article>
        </section>
    );
}
