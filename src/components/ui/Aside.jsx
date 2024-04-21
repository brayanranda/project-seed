import { NavLink } from "react-router-dom";

function Aside({data}) {
    return (
        <div className="w-2/12 pt-40">
            <ul className="px-6 space-y-2 text-white flex flex-col font-bold">
                {
                    data && data.length > 0 &&
                        data.map((item, index) => 
                            <NavLink
                                key={index}
                                to={item.url}
                                className="transform hover:scale-110 hover:translate-x-3 h-full w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-white hover:text-black duration-300 bg-opacity-10 py-2 px-4 rounded-full"
                            >
                                {item.title}
                            </NavLink>
                    )
                }
            </ul>
        </div>
    );
}

export default Aside;