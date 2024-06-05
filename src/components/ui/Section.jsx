import { useEffect, useState, useRef } from 'react';
import Markdown from "marked-react";
import { renderer } from '@/utilities/mdRenderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function Section({ url, first = false, notPb = false, showBtnModal = false,  showModal = () => {}, typeModal, setStringModal, titleBtn = "" }) {
    const [data, setData] = useState("");

    useEffect(() => {
        async function fetchData() {
            const req = await fetch(url);
            const data = await req.text();

            setData(data)
        }

        fetchData();
    }, [url])

    return (
        <section className={`w-full ${notPb ? "" : "pb-20"} ${first ? "md:pt-40" : ""} relative`}>
            <article className="mx-auto w-11/12 md:w-10/12 relative">
                <Markdown value={data} renderer={renderer} />
                {
                    showBtnModal &&
                        <button
                            onClick={() => { showModal(); setStringModal(typeModal) }}
                            className='bg-cyan-500 py-2 px-4 rounded-md font-black duration-300 hover:scale-105 transform hover:bg-yellow-400 hover:text-yellow-950'
                        >
                            <FontAwesomeIcon icon={faPlayCircle} className='me-2' />
                            Run code | {titleBtn}
                        </button>
                }
            </article>
        </section>
    );
}