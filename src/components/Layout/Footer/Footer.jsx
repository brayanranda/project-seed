import { Link, useLocation } from "react-router-dom"
import { SocialMedia } from "./SocialMedia"
import { classCircle } from "@/utilities/const"
import DevelopmentTeam from "@/components/ui/DevelopmentTeam"
import ImgSlider4 from '../../../assets/images/logo_4.png'
import { useEffect, useState } from "react"

export const Footer = () => {
    const { pathname } = useLocation();
    const location = useLocation(); 
    const [isAboutPage, setIsAboutPage] = useState(false);

    useEffect(() => {
        console.log(location.pathname);
        setIsAboutPage(location.pathname.includes('/about'));
    }, [location.pathname]);

    useEffect(() => {
        console.log(isAboutPage);
    }, [isAboutPage]);

    return (
        pathname !== "/"
            ? <footer className={`${isAboutPage  ? "w-full" : "w-full md:w-9/12"} bg-black py-20 relative z-50 overflow-hidden ms-auto`}>
                <div className="w-11/12 md:w-9/12 mx-auto space-y-28 relative z-10">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img className='w-52' src={ImgSlider4} alt="logo" />
                        </Link>
                        <DevelopmentTeam />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-10">
                        <p className="text-white font-medium">
                            ©2024 Copyright: <Link to="https://madarme.co/" target="_blank" className="underline">madarme.com</Link>
                        </p>
                        <SocialMedia />
                    </div>
                </div>
                <div className={`-top-80 -left-40 pink${classCircle}`}></div>
                <div className={`-bottom-80 -right-40 blue${classCircle}`}></div>
            </footer>
            : ""
    )
}