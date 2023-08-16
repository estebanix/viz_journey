import { useRef, useEffect, useState } from "react";
import {select, line, curveCardinal, axisBottom, axisRight, scaleLinear} from "d3";

export default function About(){
    const svgRef = useRef();
    const [data, setData] = useState([20,30, 50, 22, 69])
    useEffect(() => {
        const svg = select(svgRef.current);
        const xScale = scaleLinear().domain([0, data.length - 1]).range([0, 300])
        const yScale = scaleLinear().domain([0, 75]).range([150, 0])

        const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1);
        svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
        
        const yAxis = axisRight(yScale);
        svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal)
        svg
        .selectAll(".line")
        .data([data])
        .join("path")
        .attr("class", "line")
        .attr("d", myLine)
        .attr("fill", "none")
        .attr("stroke", "blue")
    }, [data])

    return(
        <main className="main-contact--container">
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
            <button onClick={() => setData(data.map((dat) => dat + 5))}>click</button>
        </main>
    );
}