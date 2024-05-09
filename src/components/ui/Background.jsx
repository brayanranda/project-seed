import { useState, useEffect, useRef } from "react";

export default function Background({ first = false, last = false, startLeft = false }) {
    const [circles, setCircles] = useState([]);
    const container = useRef(null);

    useEffect(() => {
        if (!container.current) return;
        const resizeObserver = new ResizeObserver(paintBg);
        resizeObserver.observe(container.current);
        return () => resizeObserver.disconnect();
    }, [])

    function paintBg() {
        const size = 700;
        const offset = size / 2;
        const colors = ["pink",  "blue", "yellow", "purple"]
        const elemHeight = container.current.getBoundingClientRect().height;
        const height = last ? elemHeight + size : elemHeight;
        const circlesArr = [];
        let left = startLeft;
        let colorIndex = 0;

        for (let i = first ? - offset : 0; i + size < height; i += size) {
            circlesArr.push(
                <div
                    key={i}
                    className={`${colors[colorIndex]}-gradient transform scale-125 circle-gradient opacity-30 w-32 h-32 absolute`}
                    style={{
                        top: i,
                        right: !left ? -offset : "auto",
                        left: left ? -offset : "auto",
                    }}
                ></div>
            )
            left = !left;
            if (++colorIndex >= colors.length) {
                colorIndex = 0;
            }
        }
        setCircles(circlesArr)
    }

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden border-red z-0" ref={container}>
            {circles}
        </div>
    )
}