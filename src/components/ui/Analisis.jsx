import { useEffect, useState } from "react";
import Title from './title';
import '../../animation.css';
import CosteComplejidad from './AnalisisEstructura';

export default function Analisis({ id,servicio_markdown, title = "", sub_title="", first = false, last = false, startLeft = false }) {
    const [loading, setLoading] = useState(true);
    const [analisis, setAnalisis] = useState(null);

    // useEffect(() => {
    //     if(analisis == null || analisis == undefined){
    //         getAnalisis();
    //     }
    // }, []);

    useEffect(() => {
        getAnalisis();
    }, [servicio_markdown]);

    const getAnalisis = () => {
        servicio_markdown().then((content) => {
            if (content) {
                setAnalisis(content);
                handleLoading();
            }
        });
    }

    const handleLoading = () => {
        setLoading(!loading);
    }

    return (
        <section className={`w-full pb-20 ${first ? "md:pt-40" : ""} relative md:pt-40`}>
            <Title
                title={title}
                sub_title={sub_title}
            />
            <article className="mx-auto w-11/12 md:w-10/12 relative">
                {/* {
                    !loading 
                        ? <CosteComplejidad id={id} analisis={analisis} />
                        : <div></div>
                } */}
                <CosteComplejidad id={id} analisis={analisis} />
            </article>
        </section>
    );
}