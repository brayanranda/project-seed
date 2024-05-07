import React, { useState, useEffect } from 'react';

function ApilarFrame({url}) {
    const [code, setCode] = useState([]);
    const [showIframe, setShowIframe] = useState(false);

    const method = async () => {
        const url = "/code-runner/stacks/Apilar.java";
        const req = await fetch(url);
        const text = await req.text();
        setCode(text)
    }

    useEffect(() => {
        method()
    }, []);

    return (
        <section className="w-full relative z-20">
            <article className="mx-auto w-11/12 md:w-10/12">
                <div className="relative h-[750px]">
                    <iframe
                        onLoad={() => setShowIframe(true)}
                        className={
                            `scale-75 origin-center w-[133.33%] relative -top-[125px] -left-[16.66%] ${showIframe ? "" : "hidden"}`
                        }
                        width="800" height="1000"
                        src={`https://pythontutor.com/render.html#code=${encodeURIComponent(code)}&cumulative=false&curInstr=7&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=java&rawInputLstJSON=[]&textReferences=false`}
                    >
                    </iframe>
                </div>
            </article>
        </section>
    );
}

export default ApilarFrame;