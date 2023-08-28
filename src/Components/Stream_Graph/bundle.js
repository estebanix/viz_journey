(function (React, ReactDOM, d3Fetch, d3Shape, d3ScaleChromatic, d3Scale, d3Array) {
    'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

    const url = "src/Datas/nwmdal.csv";

    const row = d => {
      d.Amanda = +d["school"];
      d.Amanda = +d["work"];
      d.Amanda = +d["bodybuilding"];
      d.Amanda = +d["programming"];
      d.Amanda = +d["freetime"];
      d.year = +d["year"];
        return d;
    };

    const useData = () => {
        const [data, setData] = React.useState(null);
        React.useEffect(() => {
            // Call d3.csv using row function as accessor
            d3Fetch.csv(url, row).then(setData);
        }, []);
        return data;
    };

    const StreamGraph = ({ data, width, height }) => {
      const keys = data.columns.slice(1);

      // Color for each category
      const colorScale = d3Scale.scaleOrdinal().domain(keys).range(d3ScaleChromatic.schemeDark2);

      // Accessor function to get the year and then build scale from it
      const xValue = (d) => d.year;
      const xScale = d3Scale.scaleLinear().domain(d3Array.extent(data, xValue)).range([0, width]);

      const yScale = d3Scale.scaleLinear().domain([-1000, 1000]).range([height, 0]);

      // could do some filtering here
      const stackData = data;

      // Setup the layout of the graph
      const stackLayout = d3Shape.stack()
        .offset(d3Shape.stackOffsetSilhouette)
        .order(d3Shape.stackOrderInsideOut)
        .keys(keys);

      // Using the stackLayout we get two additional components for y0 and y1.
      // For x we want to get the yeaer from the original data, so we have to access d.data
      const stackArea = d3Shape.area()
        .x((d) => xScale(d.data.year))
        .y0((d) => yScale(d[0]))
        .y1((d) => yScale(d[1]))
        .curve(d3Shape.curveBasis);

      
    	// Optional tooltip in top right corner when hovering a stream
      // You could also export the Tooltip to its own file
      const [opacity, setOpacity] = React.useState(0);
      const [text, setText] = React.useState("initialState");
      const Tooltip = ({ opacity, text }) => {
        return (
          React__default.createElement( 'text', { x: 50, y: 50, style: { opacity: opacity, fontSize: 17, fill: "black"} },
            text
          )
        );
      };
      //Interactivity function #1: Hovering
      const handleMouseover = (d) => {
        setOpacity(1);
      };
      //Interactivity function #2: Moving
      const handleMousemove = (d) => {
        setText(d.key);
      };
      //Interactivity function #3: Leaving
      const handleMouseleave = (d) => {
        setOpacity(0);
        setText("initialState");
      };

      
      // Generate path elements using React 
      // Mouseovers and opacity are optional for interactivity
      const stacks = stackLayout(stackData).map((d, i) => (
        React__default.createElement( 'path', {
          key: "stack" + i, d: stackArea(d), style: {
            fill: colorScale(d.key),
            stroke: "black",
            strokeOpacity: 0.25,
            opacity: text === "initialState" || d.key === text ? 1 : 0.2,
          }, onMouseOver: () => {
            handleMouseover();
          }, onMouseMove: () => {
            handleMousemove(d);
          }, onMouseLeave: () => {
            handleMouseleave();
          } })
      ));

      return (
        React__default.createElement( 'svg', { width: width, height: height },
          React__default.createElement( Tooltip, { opacity: opacity, text: text }),
          React__default.createElement( React__default.Fragment, null, stacks )
        )
      );
    };

    const width = 920;
    const height = 460;

    const App = () => {
      const data = useData();
      
      if (!data) {
        return React__default.createElement( 'pre', null, "Loading..." );
      }

      return React__default.createElement( StreamGraph, { data: data, width: width, height: height })
    };

    ReactDOM.render(React__default.createElement( App, null ), document.getElementById('root'));

}(React, ReactDOM, d3, d3, d3, d3, d3));
