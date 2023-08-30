

export default function StreamgraphLegend({ colorScale, groups }) {
    const circleRadius = 10;
    const circleSpacing = 10; // Spacing between circle and text
  
    return (
      <svg className="legend--container" transform={`translate(0, 10)`}>
        {groups.map((group, index) => (
          <g key={index} transform={`translate(${index * 150}, 0)`}>
            <circle r={circleRadius} fill={colorScale(group)} cy="20"/>
            <text x={circleRadius + circleSpacing} y="20" dy="0.35em">
              {group}
            </text>
          </g>
        ))}
      </svg>
    );
  };
  