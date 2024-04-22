function Aside({ data, setData, setViewTypeComponent }) {
    return (
        <div className="w-2/12 pt-40">
            <ul className="px-6 space-y-2 text-white flex flex-col font-bold fixed w-2/12">
                {
                    data && data.length > 0 &&
                        data.map((item, index) => 
                            <li
                                key={index}
                                onClick={() => {
                                    setViewTypeComponent(item.key)
                                    setData(data.map((elem, i) => ({
                                        ...elem,
                                        state: i === index ? true : false,
                                    })))
                                }}
                                className={`${item.state ? "bg-cyan-400 text-cyan-900" : "bg-slate-700 text-white"} cursor-pointer transform hover:scale-110 hover:translate-x-3 w-full hover:bg-white hover:text-black duration-300 py-2 px-4 rounded-full`}
                            >
                                {item.title} {item.state}
                            </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Aside;