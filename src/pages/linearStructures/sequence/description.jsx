import Secuencia_1 from '../../../assets/images/estructuras_lineales/secuencia/secuencia_1.jpg'
import Secuencia_2 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_2.jpg'
import Secuencia_3 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_3.jpg'
import TitleTextImg from '../../../components/ui/TitleTextImg';
import TitleAndText from '../../../components/ui/TitleAndText';
import UlList from '../../../components/ui/ul-list';

import { characteristic, description, itemsCaracteristicas, typeAndSize } from '../../../utilities/linear-structures/sequence/sequence';
import { classCircle } from '@/utilities/const';

export default function Description () {
    
    return(
        <section className="w-full pb-20 relative overflow-hidden">
            <article className="mx-auto w-11/12 md:w-8/12 lg:w-6/12">
                <TitleTextImg
                    title="Description"
                    description={description}
                    img={Secuencia_1}
                />

                <TitleAndText
                    title="Caracteristicas"
                    description={characteristic}
                />
                <UlList data={itemsCaracteristicas.items1} />
                <img className='w-full rounded-lg mt-8 mb-12' src={Secuencia_2} />
                <UlList data={itemsCaracteristicas.items2} />
                <p>En cuanto a las dimensiones de la Secuencia pueden ser:</p>
                <UlList data={itemsCaracteristicas.items3} />
                <p className='mb-10'>SEED trabaja la dimensión unidimensional debido a que es la estructura simple que posee más relevancia y del funcionamiento de estas el estudiante puede implementar de creer necesario las demás dimensiones.</p>

                <TitleAndText
                    title="Secuencia unidimensional"
                    description="Es un conjunto de elementos del mismo tipo."
                />
                <div className='flex items-center gap-5 mt-8 mb-12 flex-wrap'>
                    <p className='text-cyan-300 font-medium font-xl'>Declaración:</p>
                    <img className='rounded-lg' src={Secuencia_3} />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {
                        typeAndSize && typeAndSize.length > 0 &&
                            typeAndSize.map((item, index) => 
                                <div className='' key={index}>
                                    <p className="text-2xl font-medium mb-5">{item.name}</p>
                                    <p>{item.description}</p>
                                </div>
                            )
                    }
                </div>
            </article>
            <div className={`-top-[40rem] right-[40rem] blue${classCircle}`}></div>
            <div className={`top-52 -right-96 pink${classCircle}`}></div>
            <div className={`bottom-96 -left-96 purple${classCircle}`}></div>
            <div className={`-bottom-52 -right-72 yellow${classCircle}`}></div>
        </section>
    );
}