import { useEffect, useState } from "react";
import Aside from "@/components/ui/Aside";
import Background from "@/components/ui/Background";
import AsideMobile from "@/components/ui/AsideMobile";

const Template = ({ children, data, setData, viewComponents, viewTypeComponent, setViewTypeComponent }) => {
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
    <main className="bg-seed text-white relative">
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
            <div className="w-full md:w-9/12 relative ms-auto top-0 right-0">
                <Background first={true} last={true} startLeft={false}/>
                {viewTypeComponent in viewComponents && viewComponents[viewTypeComponent]}
                {children}
            </div>
        </div>
    </main>
  )
}

export default Template