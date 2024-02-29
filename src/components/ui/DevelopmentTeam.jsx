import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Link } from "react-router-dom"
import { faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MarcoA from '../../assets/images/devs/marcoa.jpg'

export default function DevelopmentTeam() {
    const data = [
        {
            name: "Marco Adarme",
            url: "https://github.com/brayanranda",
            img: MarcoA,
        },
        {
            name: "Wilfred Garcia",
            url: "https://github.com/brayanranda",
            img: "",
        },
        {
            name: "Cindy Pabón",
            url: "https://github.com/brayanranda",
            img: "",
        },
        {
            name: "Brayan Peñaranda",
            url: "https://github.com/brayanranda",
            img: "",
        }
    ]

    return(
        <Popover>
            <PopoverTrigger>
                <div className="cursor-pointer transform hover:scale-105 duration-300 bg-cyan-400 rounded-full p-2 text-white flex items-center space-x-3 w-fit">
                    <FontAwesomeIcon icon={faUserGroup} className="border-white border-2 text-md rounded-full w-3 h-3 md:w-5 md:h-5 p-1 md:p-2" />
                    <div className="text-md xl:text-lg font-medium pr-2 flex items-center flex-wrap">
                        <p>Equipo</p>
                        <p className="hidden md:block">de desarrollo</p>
                    </div>
                </div>
            </PopoverTrigger>
            <PopoverContent className="m-0 p-0">
                <ul className="bg-white rounded-lg p-2 font-medium">
                    {
                        data && data.length > 0 &&
                            data.map((item, index) => 
                                <li key={index} className="cursor-pointer flex items-center justify-between hover:bg-gray-100 p-2 rounded-lg">
                                    {item.name}
                                    {
                                        item.img !== ""
                                            ? <img className="h-8 w-8 rounded-full" src={item.img} alt="Img dev" />
                                            :
                                                <Link to={item.url} className="flex items-center justify-center h-8 w-8 bg-gray-300 rounded-full" target="_blank">
                                                    <FontAwesomeIcon icon={faUser} className="fa-md" />
                                                </Link>
                                    }
                                </li>
                            )
                    }
                </ul>
            </PopoverContent>
        </Popover>
    )
}