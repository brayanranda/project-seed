import TitleMd from "@/components/ui/TitleMd";
import { downloads } from "@/utilities/downloads";
import { Link } from "react-router-dom";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from "@/components/ui/Background";

export default function Downloads() {
    return (
        <main className="w-full bg-white bg-seed py-20 relative">
            <Background first={true} last={true}/>
           
            <div className="mx-auto w-11/12 lg:w-9/12 space-y-10 relative">
                <br />
                <TitleMd title="Descargas" color="text-white" />
                {
                    downloads && downloads.length > 0 &&
                        downloads.map((item, index) => {
                            return (
                                <div key={index} className="text-white">
                                    <br />
                                    <TitleMd title={item.category} type="2" color="text-white" />
                                    <br />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 ">
                                        {
                                            item.items.map((elem, index) => {
                                                return (
                                                    <div key={index} className="p-3 bg-white transform hover:scale-105 duration-300 rounded-lg text-black flex flex-col sm:flex-row justify-between gap-6">
                                                        <div className="flex gap-2">
                                                            <FontAwesomeIcon icon={item.icon} className="text-2xl px-3 py-2 rounded-full bg-gray-200" />
                                                            <p className="text-xl font-medium mt-1">{elem.title}</p>
                                                        </div>
                                                        <Link
                                                            target="_blank"
                                                            to={elem.url}
                                                            className="text-purple-500 font-medium hover:text-white w-fit h-fit flex items-center gap-3 border-2 border-purple-500 hover:bg-purple-500 duration-300 py-1 px-2 rounded-sm"
                                                        >
                                                            <FontAwesomeIcon icon={faDownload} className="text-xl" />
                                                            Descargar
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </main>
    );
}