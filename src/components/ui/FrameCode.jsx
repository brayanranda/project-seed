import React, { useState, useEffect } from 'react';

function FrameCode ({url}) {
    const [code, setCode] = useState([]);
    const [showIframe, setShowIframe] = useState(false);

    const method = async () => {
        try {
            const req = await fetch(url);
            const text = await req.text();
            setCode(text)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        method()
    }, [url]);

    return (
        <section className="w-full relative z-20">
            <article>
                <div className="relative h-[750px]">
                    <iframe
                        width="800" height="1000"
                        onLoad={() => setShowIframe(true)}
                        className={`scale-75 origin-center w-[133.33%] relative -top-[125px] -left-[16.66%] ${showIframe ? "" : "hidden"}`}
                        src={`https://pythontutor.com/render.html#code=${encodeURIComponent(code)}&cumulative=false&curInstr=7&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=[]&textReferences=false`}
                    >
                    </iframe>
                </div>
            </article>
        </section>
    );
}

export default FrameCode;