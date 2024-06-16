import { faFacebook, faLinkedin, faYoutube, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { items } from "../../../utilities/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const SocialMedia = () => {
    const icons = {
        Facebook: faFacebook,
        LinkedIn: faLinkedin,
        Youtube: faYoutube,
        Twitter: faTwitter,
        Github: faGithub,
    }
    return(
        <ul className="flex flex-wrap items-center gap-x-6">
            {
                items && items.length > 0 &&
                    items.map((item, index) =>
                        <Link to={item.url} key={index} target="_blank" className="transform hover:scale-110 duration-300 ease-in-out opacity-65 hover:opacity-100">
                            <li className="text-white flex items-center gap-2 font-medium">
                                <FontAwesomeIcon icon={icons[item.name]} />
                                {item.name}
                            </li>
                        </Link> 
                    )
            }
        </ul>
    );
}