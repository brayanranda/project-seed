import { useEffect, useState } from "react";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import AsideMobile from "@/components/ui/AsideMobile";

const Template = ({children, data, setData, viewComponents, viewTypeComponent, setViewTypeComponent}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function checkIfMobile() {
          const mobile = window.innerWidth < 768;
          if (mobile !== isMobile) {
            setIsMobile(mobile);
          }
        }
        checkIfMobile();
    
        window.addEventListener('resize', checkIfMobile);
    
        return () => {
          window.removeEventListener('resize', checkIfMobile);
        };
    }, [isMobile]);
  return (
    <main className="bg-seed text-white">
            <Background first={true} last={true} startLeft={false}/>
            <div className="flex flex-col md:flex-row gap-2 relative">
                {isMobile 
                    ?   <AsideMobile
                            data={data}
                            setData={setData}
                            setViewTypeComponent={setViewTypeComponent}
                        /> 
                    :  <Aside
                            data={data}
                            setData={setData}
                            setViewTypeComponent={setViewTypeComponent}
                        />
                }
                <div className="w-full md:w-9/12">
                    {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                    {children}
                </div>
            </div>
        </main>
  )
}

export default Template