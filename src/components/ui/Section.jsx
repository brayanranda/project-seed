import { useEffect, useState, useRef } from 'react';
import Markdown from "marked-react";
import { renderer } from '@/utilities/mdRenderer';
import Background from './Background';

export default function Section({ url, first = false, last = false, startLeft = false }) {
    const [data, setData] = useState("");

    const container = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(url);
            const data = await req.text();

            setData(data)
        }

        fetchData();
    }, [])

    return (
        <section className={`w-full pb-20 ${first ? "pt-40" : ""} relative`}>
            {/* <Background first={first} last={last} startLeft={startLeft}/> */}

            <article className="mx-auto w-11/12 md:w-8/12 lg:w-9/12 relative">
                <Markdown value={data} renderer={renderer} />
            </article>
        </section>
    );
}