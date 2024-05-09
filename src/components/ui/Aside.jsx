import React, { useState, useEffect } from 'react';

function Aside({ data, setData, setViewTypeComponent }) {
    const [openList, setOpenList] = useState(false);
    const [activeList, setActiveList] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data])

    const handleItemClick = (key, list) => {
        return list.map(item => {
            if (item.key === key) {
                return {
                    ...item,
                    state: true,
                };
            } else if (item.subList) {
                return {
                    ...item,
                    subList: handleItemClick(key, item.subList),
                };
            } else {
                return {
                    ...item,
                    state: false,
                };
            }
        });
    }

    const onItemClick = (key) => {
        const updatedData = handleItemClick(key, data);
        setData(updatedData);
    }

    const handleOpen = (key) => {
        if (activeList !== key) {
            if (!openList) {setOpenList(!openList);}
            setActiveList(key)
        }else{
            setOpenList(!openList);
        }
    }

    return (
        <div className="w-full md:w-3/12 pt-40">
            <ul
                className={`px-6 space-y-2 text-white flex flex-col font-bold fixed w-3/12 ${data && data.length > 8 ? "overflow-y-scroll h-[600px]" : ""}`}
            >
                {
                    data && data.length > 0 &&
                    data.map((item, index) => {
                        if (item.children) {
                            return (
                                <li key={index}>
                                    <div
                                        onClick={() => { handleOpen(item.key) }}
                                        className={`${openList && activeList === item.key ? "bg-white text-black scale-110 translate-x-3" : "bg-slate-700 text-white"} cursor-pointer transform hover:scale-110 hover:translate-x-3 w-full hover:bg-white hover:text-black duration-300 py-2 px-4 rounded-xl`}
                                    >
                                        {item.title}
                                    </div>
                                    {openList && activeList === item.key &&
                                        <ul className='mt-2'>
                                            {
                                                item.subList.map((subItem, ind) =>
                                                    <li
                                                        key={ind}
                                                        onClick={() => {
                                                            setViewTypeComponent(subItem.key)
                                                            onItemClick(subItem.key);
                                                        }}
                                                        className={`${subItem.state ? "bg-cyan-400 text-cyan-900" : "bg-slate-900 text-white"} cursor-pointer transform hover:scale-110 hover:translate-x-3 w-full hover:bg-white hover:text-black duration-300 py-2 px-4 ml-2 mb-2 rounded-xl`}
                                                    >
                                                        {subItem.title}
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    }
                                </li>
                            )
                        } else {
                            return <li
                                key={index}
                                onClick={() => {
                                    setViewTypeComponent(item.key)
                                    onItemClick(item.key);
                                    setOpenList(false);
                                }}
                                className={`${item.state ? "bg-cyan-400 text-cyan-900" : "bg-slate-700 text-white"} cursor-pointer transform hover:scale-110 hover:translate-x-3 w-full hover:bg-white hover:text-black duration-300 py-2 px-4 rounded-xl`}
                            >
                                {item.title}
                            </li>
                        }
                    }
                    )
                }
            </ul>
        </div>
    );
}

export default Aside;