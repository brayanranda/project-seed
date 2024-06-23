import React, { useState, useEffect } from 'react';
import Section from "@/components/ui/Section";
import { consGrafos } from "@/utilities/aside/grafos";
import GraphDownloads from "./GraphDownloads";
import Template from '@/components/Layout/Template';

export default function Graph () {
    const [grafos, setGrafos] = useState(consGrafos);

    useEffect(() => {
        setGrafos(consGrafos)
    }, [consGrafos]);

    const [viewTypeComponent, setViewTypeComponent] = useState("teo");
    const viewComponents = {
        teo: <Section url="/markdown/graph/description.md" first={true} />,
        rep: <Section url="/markdown/graph/representaciones.md" first={true} />,
        grafCon: <Section url="/markdown/graph/grafosConexos.md" first={true} />,
        term: <Section url="/markdown/graph/terminologias.md" first={true} />,
        fam: <Section url="/markdown/graph/familias.md" first={true} />,
        grafBip: <Section url="/markdown/graph/grafosBipartitos.md" first={true} />,
        repGra: <Section url="/markdown/graph/representacionGrafos.md" first={true} />,
        iso: <Section url="/markdown/graph/isomorfismoGrafos.md" first={true} />,
        rut: <Section url="/markdown/graph/rutaCamino.md" first={true} />,
        cir: <Section url="/markdown/graph/circuitos.md" first={true} />,
        grafPon: <Section url="/markdown/graph/grafosPonderados.md" first={true} />,
        algDij: <Section url="/markdown/graph/algoritmoDijkstra.md" first={true} />,
        alg: <Section url="/markdown/graph/algoritmos.md" first={true} />,
        impl: <Section url="/markdown/graph/implementation.md" first={true} last={true} />,
    }

    return(
        <Template
            data={grafos}
            setData={setGrafos}
            viewComponents={viewComponents}
            viewTypeComponent={viewTypeComponent}
            setViewTypeComponent={setViewTypeComponent}
        >
            <GraphDownloads/>
        </Template>
    );
}