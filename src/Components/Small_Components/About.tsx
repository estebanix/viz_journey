import { useRef, useEffect, useState } from "react";
import {select, line, curveCardinal} from "d3";

export default function About(){
    const svgRef = useRef();
    const [data, setData] = useState([55, 29, 83, 40, 54])
    useEffect(() => {
        const svg = select(svgRef.current);
        const myLine = line()
            .x((value, index) => index * 50)
            .y(value => value)
            .curve(curveCardinal)
        svg
        .selectAll("path")
        .data([data])
        .join("path")
        .attr("d", value => myLine(value))
        .attr("fill", "none")
        .attr("stroke", "blue")
        /*svg
        .selectAll("circle")
        .data(data)
        .join("circle")
            .attr("r", value => value)
            .attr("stroke", "red")
            .attr("cy", value => value * 2)
            .attr("cx", value => value * 3)
            .attr("fill", value => `rgba(148, 028, 128, 0.${value})`)*/
    }, [data])
    return(
        <main>
            <svg ref={svgRef}></svg>
            <button onClick={() => setData(data.map(value => value * 1.05))}>CLICK</button>
        </main>
    );
}