import { useRef, useEffect, useState} from "react";
import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";

export default function About(){
    const svgRef = useRef();
    const [data, setData] = useState([20,30, 50, 22, 69])
    const [rangePostion, setRangePosition] = useState(1)

    useEffect(() => {
        const svg = select(svgRef.current);
        const xScale = scaleBand().domain(data.map((dat, index) => index)).range([0, 300]).padding(0.5)
        const yScale = scaleLinear().domain([0, 75]).range([150, 0])
        const colorScale = scaleLinear().domain([40, 75]).range(["blue", "pink"]).clamp(true)

        const xAxis = axisBottom(xScale).ticks(data.length);
        svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
        
        const yAxis = axisRight(yScale);
        svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

        svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("fill", `rgba(205, 92, 92, 0.501)`)
        .attr("cx", value => value * rangePostion / 4)
        .attr("cy", value => value * rangePostion / 40)
        .attr("r", value => value / 4)

    }, [data, rangePostion])

    const showFlow = (e) => {
        setRangePosition(e.target.value)
    }

    return(
        <main className="main-contact--container">
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
            <input type="range" onChange={e => showFlow(e)} min="1" max="10" value={rangePostion} />
        </main>
    );
}