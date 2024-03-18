import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CustomDialog from "./CustomDialog";
import TitleMd from "./TitleMd";

export default function CodeRunner({ data = [
    {
        name: "",
        url: "",
        icon: null,
    }
] }) {

    const [code, setCode] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentCode, setCurrentCode] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const newCode = await Promise.all(data.map(item => {
                return new Promise(async (resolve, reject) => {
                    const req = await fetch(item.url);
                    const text = await req.text();
                    resolve(text)
                })
            }))

            setCode(newCode);
        }

        fetchData()
    }, [])

    return (
        <section className="w-full bg-gray-100 py-20 text-black relative z-20">
            <article className="mx-auto w-11/12 md:w-8/12 lg:w-6/12">
                <TitleMd title="Secuencia" subTitle="Ejecución de" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        data.map((item, index) => {
                            return (
                                <button key={index} className="bg-black p-3 text-white rounded-lg hover:scale-105 transition-all"
                                    onClick={() => { setOpen(true); setCurrentCode(code[index]) }}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="mr-3" />
                                    {item.name}
                                </button>
                            )
                        })
                    }
                </div>

                <CustomDialog open={open} setOpen={setOpen}>

                    <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 w-auto"
                            onClick={() => setOpen(false)}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                    </div>
                    
                    <iframe className="w-full h-full" width="800" height="500" frameborder="0" src={`https://pythontutor.com/render.html#code=${encodeURIComponent(currentCode)}&cumulative=false&curInstr=7&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=[]&textReferences=false`}> </iframe>
                </CustomDialog>
            </article>
        </section >
    )
}