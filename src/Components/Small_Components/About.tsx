import { useRef, useEffect, useState} from "react";
import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";

export default function About(){
    const svgRef = useRef();
    const [data, setData] = useState([{x: 20, y: 34, label: "dot1"},{x: 10, y: 44, label: "dot2"},{x: 50, y: 134, label: "dot3"}])
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
        .attr("fill", `rgba(205, 92, 92, 0.${rangePostion})`)
        .attr("cx", value => value.x * rangePostion / 4)
        .attr("cy", value => 150 - value.y * rangePostion / 20)
        .attr("r", "10")
        
        .on("mouseover", (event, value) => {
            const [x, y] = [event.pageX, event.pageY];
            svg
              .append("text")
              .attr("class", "tooltip")
              .attr("x", x + 10)
              .attr("y", y - 10)
              .text(value.label);
          })
          .on("mouseout", () => {
            svg.select(".tooltip").remove();
          });

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