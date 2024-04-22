import { useEffect, useState, useRef } from 'react';
import Markdown from "marked-react";
import { renderer } from '@/utilities/mdRenderer';

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
    }, [url])

    return (
        <section className={`w-full pb-20 ${first ? "pt-40" : ""} relative`}>
            <article className="mx-auto w-11/12 md:w-10/12 relative">
                <Markdown value={data} renderer={renderer} />
            </article>
        </section>
    );
}