import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Button({ item }) {
    return(
        <div className="flex flex-col space-y-3">
            <p className="text-xl">{item.title}</p>
            <Link
                to={item.url}
                target="_blank"
                className="bg-white font-medium rounded-full text-black w-52 flex items-center gap-3 justify-start shadow-lg text-xl transform hover:scale-105 hover:shadow-xl duration-300"
            >
                <FontAwesomeIcon icon={faDownload} className="text-white bg-seed p-4 rounded-full fa-lg" />
                Descargar
            </Link>
        </div>
    )
}