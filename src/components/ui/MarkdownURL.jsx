import Markdown from "marked-react";
import { useEffect, useState } from "react";
import { renderer } from '@/utilities/mdRenderer';

export default function MarkdownURL({ url = "" }) {
    const [content, setContent] = useState("");

    useEffect(()=> {
        getContent();
    }, [url])

    async function getContent(){
        const req = await fetch(url);
        const data = await req.text();
        setContent(data);
    }

    return (
        <>
            <Markdown value={content} renderer={renderer} />
        </>
    )
}