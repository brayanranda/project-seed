import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UlList({ data }) {
    return(
        <ul className="my-10 space-y-6">
            {
                data && data.length &&
                    data.map((element, index) => 
                        <li key={index}>
                            <FontAwesomeIcon className="text-cyan-400 mr-3" icon={faStarOfLife} />
                            {element}
                        </li>
                    )
            }
        </ul>
    );
}