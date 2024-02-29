import Markdown from "marked-react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { renderer } from '@/utilities/mdRenderer';

export default function TabsComponentMd({ data = [{ name: "", icon: "", url: ""}] }) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const newContent = await Promise.all(data.map(item => {
                return new Promise(async (resolve, reject) => {
                    const req = await fetch(item.url);
                    const md = await req.text();
                    resolve(md)
                })
            }))

            setContent(newContent);
        }

        fetchData()
    }, [])

    return (
        <Tabs defaultValue={data[0].name ? data[0].name : ""} className="w-full mt-8">
            <TabsList className="bg-cyan-400 mb-8">
                {
                    data.map((item, index) =>
                        <TabsTrigger className="text-white" value={item.name} key={index}>
                            <FontAwesomeIcon icon={item.icon} className='mr-2' />
                            {item.name}
                        </TabsTrigger>
                    )
                }
            </TabsList>
            {
                data.map((item, index) => {
                    return (
                        <TabsContent value={item.name} key={index}>
                            <Markdown value={content[index]} renderer={renderer} />
                        </TabsContent>
                    )
                })
            }

        </Tabs>
    )
}