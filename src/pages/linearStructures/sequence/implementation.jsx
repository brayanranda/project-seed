import { classCircle } from '@/utilities/const';
import Secuencia_10 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_10.jpg'
import Secuencia_11 from '../../../assets/images/estructuras_lineales/secuencia/Secuencia_11.jpg'
import Title from '../../../components/ui/title';
import UlList from '../../../components/ui/ul-list';
import { description, itemsDescription } from '../../../utilities/linear-structures/sequence/implementation';

export default function Implementation () {
    const newDescription = description.replace(/<br>/g, '<div class="my-break"></div>');

    return(
        <section className="w-full py-20 relative overflow-hidden">
            <Title
                title="Secuencia en SEED"
                sub_title="Implementación de"
            />
            <article className="mx-auto w-11/12 md:w-8/12 lg:w-6/12">
                <p className="text-2xl font-medium mb-5">Description</p>
                <p dangerouslySetInnerHTML={{ __html: newDescription }} />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20 my-10'>
                    <img className='w-full rounded-lg' src={Secuencia_10} />
                    <div>
                        <p className="text-2xl font-medium mb-5">Requerimientos <br /> funcionales implementados:</p>
                        <UlList data={itemsDescription} />
                    </div>
                </div>
                <p className="text-2xl font-medium">Implementación de  Simulador:</p>
                <p className='mb-5'>El Simulador posee las operaciones indicadas por su menú de opciones:</p>
                <img className='w-full rounded-lg mt-10' src={Secuencia_11} />
            </article>

            <div className={`-top-[25rem] -left-32 pink${classCircle}`}></div>
            <div className={`top-52 -right-96 yellow${classCircle}`}></div>
            <div className={`bottom-96 -left-96 purple${classCircle}`}></div>
            <div className={`-bottom-96 -right-40 blue${classCircle}`}></div>
        </section>
    );
}