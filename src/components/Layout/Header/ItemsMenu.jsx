import { Link } from "react-router-dom"
import { items } from "../../../utilities/navbar"

export const ItemsMenu = () => {
    return(
        <ul className="flex items-center">
            {
                items && items.length > 0 &&
                    items.map((item, index) => 
                        <Link to={item.url} className="px-4 py-2 rounded-full duration-300 backdrop-blur-sm hover:bg-white/30" key={index}>
                            <li className="text-white">{item.name}</li>
                        </Link>
                    )
            }
        </ul>
    )
}