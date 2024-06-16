import { useEffect, useState } from "react";
import markdownit from 'markdown-it'
import { formatearMd } from "@/lib/formatter";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

export default function CosteComplejidad({ id, analisis }) {
    const md = markdownit();
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    let id_contenedor = id + "_analisis";

    useEffect(() => {
        if (analisis != null || analisis != undefined) {
            const htmlContent = md.render(analisis);
            let divAnalisis = document.getElementById(id_contenedor);
            divAnalisis.hidden = true;
            divAnalisis.innerHTML = htmlContent;
            formatearMd(id_contenedor);
        }
    }, [analisis]);

    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }

    return (
        <div className="accordion-container" >
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="accordion-item">
                <AccordionHeader onClick={() => handleOpen(1)}>Análisis Algorítmico</AccordionHeader>
                <AccordionBody>
                    <div id={id_contenedor} className="analisis" />
                </AccordionBody>
            </Accordion>
        </div>
    );
}