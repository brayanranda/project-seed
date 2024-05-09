import Markdown from "marked-react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { renderer } from '@/utilities/mdRenderer';

export default function TabsComponentMd({ data = [{ name: "", icon: "", url: "", runner: "" }] }) {
    const [content, setContent] = useState([]);
    const [code, setCode] = useState([]);
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const newContent = await Promise.all(data.map(item => {
                return new Promise(async (resolve, reject) => {
                    const req = await fetch(item.url);
                    const md = await req.text();
                    resolve(md)
                })
            }))

            const newCode = await Promise.all(data.map(item => {
                return new Promise(async (resolve, reject) => {
                    const req = await fetch(item.runner);
                    const text = await req.text();
                    resolve(text)
                })
            }))
            
            setContent(newContent);
            setCode(newCode)
        }

        fetchData()
    }, [])

    return (
        <Tabs defaultValue={data[0].name ? data[0].name : ""} className="w-full mt-8">
            <TabsList className="bg-cyan-400 mb-8">
                {
                    data.map((item, index) =>
                        <TabsTrigger className="text-white" value={item.name} key={index} onClick={() => setShowIframe(false)}>
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

                            {item.runner && code[index] ?
                                <div className="relative h-[750px]">
                                    <iframe
                                        onLoad={() => setShowIframe(true)}
                                        className={
                                            `scale-75 origin-center w-[133.33%] relative -top-[125px] -left-[16.66%] ${showIframe ? "" : "hidden"}`
                                        }
                                        width="800" height="1000"
                                        src={`https://pythontutor.com/render.html#code=${encodeURIComponent(code[index])}&cumulative=false&curInstr=7&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=[]&textReferences=false`}
                                    >
                                    </iframe>
                                </div>
                                : ""
                            }
                        </TabsContent>
                    )
                })
            }

        </Tabs>
    )
}