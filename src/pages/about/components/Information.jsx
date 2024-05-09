import imagen from '../../../assets/images/about-seed.png';

export default function Information() {
    return(
        <section className="bg-white py-12 lg:py-20 xl:py-28">
            <article className="flex flex-col lg:flex-row items-center gap-y-16 lg:gap-x-24 mx-auto w-9/12">
                <img className="object-cover transform lg:scale-110" src={imagen} alt="" />
                <div className='space-y-8'>
                    <p className="text-3xl lg:text-5xl font-medium">Seed</p>
                    <p className="text-xl lg:text-2xl font-medium">Este es un mediador pedagógico que puede catalogarse como una herramienta de acompañamiento al estudiante, de modo que podrá modificar el código fuente del componente para que esté adopte los requerimientos que requiera determinada solución computacional.</p>
                    <p className="">Cabe mencionar que el componente implementado será de base para el funcionamiento del simulador que se desarrollará, para ilustrar el funcionamiento de algunas de las estructuras implementadas en SEED, con el objetivo de mostrar de forma más lúdica el comportamiento de las diversas estructuras.</p>
                </div>
            </article>
        </section>
    );
}