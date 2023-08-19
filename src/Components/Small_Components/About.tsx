import { useRef, useEffect, useState, useContext} from "react";
import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";
import { Context } from "../../Context/Context";

export default function About(){
    const svgRef = useRef();
    const {vizData} = useContext(Context);
    const [data, setData] = useState([{x: 20, y: 34, label: "dot1"},{x: 10, y: 44, label: "dot2"},{x: 50, y: 134, label: "dot3"}])
    const [rangePostion, setRangePosition] = useState(1)

    const groupColors = {
        Africa: "#f2c57c",
        Americas: "#ddae7e",
        Asia: "#7fb685",
        Europe: "#ef6f6c",
        Oceania: "#426a5a",
      };

    useEffect(() => {
        const svg = select(svgRef.current);
        const xScale = scaleBand().domain(data.map((dat, index) => index)).range([0, 600]).padding(0.5)
        const yScale = scaleLinear().domain([0, 150]).range([300, 0])

        const xAxis = axisBottom(xScale).ticks(data.length);
        svg.select(".x-axis").style("transform", "translateY(300px)").call(xAxis);
        
        const yAxis = axisRight(yScale);
        svg.select(".y-axis").call(yAxis);

        svg
        .selectAll("circle")
        .data(vizData)
        .join("circle")
        .attr("fill", value => groupColors[value.group]) 
        .attr("cx", value => value.x / (10 * rangePostion))
        .attr("cy", value => value.y * 3 )
        .attr("r", "5")
        
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

    }, [vizData, rangePostion])

    const showFlow = (e) => {
        setRangePosition(e.target.value)
    }

    return(
        <main className="main-contact--container">
            <svg ref={svgRef} height={300}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
            <input type="range" onChange={e => showFlow(e)} min="1" max="10" value={rangePostion} />
        </main>
    );
}