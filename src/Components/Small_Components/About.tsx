import { useRef, useEffect, useState} from "react";
import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";

export default function About(){
    const svgRef = useRef();
    const [data, setData] = useState([20,30, 50, 22, 69])
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

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
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .style("transform", "scale(1, -1)")
        .attr("x", (value, index) => xScale(index))
        .attr("y", -150)
        .attr("width", xScale.bandwidth())
        .transition()
        .attr("fill", colorScale)
        .attr("height", value => 150 - yScale(value))
       
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