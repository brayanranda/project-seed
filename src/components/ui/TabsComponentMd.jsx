import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarkdownURL from "./MarkdownURL";
import RunCodeBtn from "./RunCodeBtn";

export default function TabsComponentMd({ data = [{ name: "", icon: "", url: "", runner: "" }] }) {
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
                            <MarkdownURL url={item.url} />
                            <RunCodeBtn name={item.name} runner={item.runner} />
                        </TabsContent>
                    )
                })
            }

        </Tabs>
    )
}