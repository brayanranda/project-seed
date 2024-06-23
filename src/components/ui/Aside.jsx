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
    //  14
    return (
        <div className="w-full md:w-3/12 z-10 h-screen fixed top-0 left-0 bg-gradient-to-t from-black to-transparent">
            <ul className={`px-6 p-40 text-white flex flex-col font-bold fixed w-3/12`}>
                <div className={`space-y-2 ${data.length > 14 ? "overflow-y-scroll h-[750px] custom-scrollbar" : ""}`}>
                    {
                        data && data.length > 0 &&
                            data.map((item, index) => {
                                if (item.children) {
                                    return (
                                        <li key={index}>
                                            <div
                                                onClick={() => { handleOpen(item.key) }}
                                                className={`${openList && activeList === item.key ? "bg-white text-black" : "bg-slate-700 text-white"} cursor-pointer transform w-full hover:bg-white hover:text-black duration-300 py-2 px-4 rounded-xl`}
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
                                                                className={`${subItem.state ? "bg-cyan-400 text-cyan-900" : "bg-slate-900 text-white"} cursor-pointer w-full hover:bg-white hover:text-black duration-300 py-2 px-4 ml-2 mb-2 rounded-xl`}
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
                                        className={`${item.state ? "bg-cyan-400 text-cyan-900" : "bg-slate-700 text-white"} cursor-pointer transform w-full hover:bg-white hover:text-black duration-300 py-2 px-4 rounded-xl`}
                                    >
                                        {item.title}
                                    </li>
                                }
                            }
                        )
                    }
                </div>
            </ul>
        </div>
    );
}

export default Aside;