import { operations } from '@/utilities/linear-structures/sequence/operations'
import TitleAndText from '@/components/ui/TitleAndText'
import TabsComponent from '@/components/ui/TabsComponent'

export default function Operations () {
    return(
        <section className="w-full bg-white py-20 text-black">
            <article className="mx-auto w-11/12 md:w-8/12 lg:w-6/12">
                <TitleAndText
                    title="Operaciones"
                    description="Las operaciones básicas de esta estructura son:"
                />
                <TabsComponent operations={operations} />
            </article>
        </section>
    );
}