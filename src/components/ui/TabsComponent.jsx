import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Title from '@/components/ui/title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleTextImg from '@/components/ui/TitleTextImg'

export default function TabsComponent({ operations }) {
    return(
        <>
            {
                operations && Object.entries(operations).length > 0 &&
                    <Tabs defaultValue={operations[0].title} className="w-full mt-8">
                        <TabsList className="bg-cyan-400 mb-8">
                            {
                                operations && operations.length > 0 &&
                                    operations.map((item, index) => 
                                        <TabsTrigger className="text-white" value={item.title} key={index}>
                                            <FontAwesomeIcon icon={item.icon} className='mr-2' />
                                            {item.title.split(" ")[0]}
                                        </TabsTrigger>
                                    )
                            }
                        </TabsList>
                        {
                            operations && operations.length > 0 &&
                                operations.map((item, index) => 
                                    <TabsContent value={item.title} key={index}>
                                            <Title
                                                size={true}
                                                color={true}
                                                title={item.title}
                                                sub_title="Operación"
                                            />
                                            <p>{item.description}</p>
                                            {
                                                item.ejemplo && item.ejemplo.length > 0 &&
                                                    <p className='mt-10 mb-5 text-xl font-medium'>Ejemplo de {item.title}</p>
                                            }
                                            {
                                                item.ejemplo && item.ejemplo.length > 0 &&
                                                    item.ejemplo.map((example, index) => 
                                                        <div key={index}>
                                                            <TitleTextImg
                                                                bold={true}
                                                                title={example.text}
                                                                img={example.image}
                                                            />
                                                        </div>
                                                    )
                                            }
                                    </TabsContent>
                                )
                        }
                    </Tabs>   
            }
        </>
    )
}