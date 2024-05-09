import { useEffect, useState } from 'react'

const AsideMobile = ({ data, setData, setViewTypeComponent }) => {
    const [openMenuList, setopenMenuList] = useState(false);
    const [openList, setOpenList] = useState(false);
    const [activeList, setActiveList] = useState(null);
    const [activeTitle, setActiveTitle] = useState(data[0].title);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data]);

    const handleItemClick = (key, list) => {
        return list.map(item => {
            if (item.key === key) {
                setActiveTitle(item.title);
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
            if (!openList) { setOpenList(!openList); }
            setActiveList(key)
        } else {
            setOpenList(!openList);
        }
    }

    return (
        <div className="w-full pt-40 relative z-10">
            <div className="container mx-auto">
                <button
                    onClick={() => setopenMenuList(!openMenuList)}
                    className="flex justify-between items-center w-full px-4 py-2 bg-cyan-400 text-cyan-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                    <span>{activeTitle}</span>
                    <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                {
                    openMenuList &&
                    (
                        <div className="mt-2 w-full rounded-md shadow-lg bg-slate-700 text-white ring-1 ring-black ring-opacity-5 px-2 py-2">
                            {
                                data && data.length > 0 &&
                                data.map((item, index) => {
                                    if (item.children) {
                                        return (
                                            <div key={index} className="">
                                                <button
                                                    onClick={() => handleOpen(item.key)}
                                                    className={`${openList && activeList === item.key ? "bg-white text-black" : "bg-slate-700 text-white"} flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-white hover:text-black rounded-md`}
                                                > {item.title}
                                                    <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </button>
                                                {
                                                    openList && activeList === item.key &&
                                                    (
                                                        <div className="w-full rounded-md text-white px-2 py-2">
                                                            {item.subList.map((subItem, ind) =>
                                                                <button key={ind}
                                                                    onClick={() => {
                                                                        setViewTypeComponent(subItem.key)
                                                                        onItemClick(subItem.key);
                                                                        setopenMenuList(!openMenuList)
                                                                    }} 
                                                                    className={`${subItem.state ? "bg-cyan-400 text-cyan-900" : "bg-slate-900 text-white"} flex w-full px-4 py-2 mb-2 rounded-md text-sm hover:bg-white hover:text-black`}>
                                                                    {subItem.title}
                                                                </button>
                                                            )
                                                            }
                                                        </div>
                                                    )
                                                }

                                            </div >
                                        )
                                    } else {
                                        return <button key={index}
                                            onClick={() => {
                                                setViewTypeComponent(item.key)
                                                onItemClick(item.key);
                                                setOpenList(false);
                                                setopenMenuList(!openMenuList);
                                            }}
                                            className="flex w-full cursor-pointer px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-md">
                                            {item.title}
                                        </button>
                                    }
                                })
                            }
                        </div >
                    )
                }
            </div >
        </div >

    )
}

export default AsideMobile