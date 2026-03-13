import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RewardCircuitVisualization = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;

    svg.attr('width', width).attr('height', height);

    const data = [
      { x: 0, y: 50 },
      { x: 1, y: 85 },
      { x: 2, y: 60 },
      { x: 3, y: 90 },
      { x: 4, y: 75 },
    ];

    const xScale = d3.scaleLinear() 
      .domain([0, d3.max(data, d => d.x)]) 
      .range([0, width]);

    const yScale = d3.scaleLinear() 
      .domain([0, d3.max(data, d => d.y)]) 
      .range([height, 0]);

    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    svg.append('path')
      .data([data])
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'blue');

    const updateData = () => {
      // Simulating new data coming in
      const newData = data.map(d => ({ x: d.x, y: Math.random() * 100 }));
      svg.selectAll('*').remove();
      svg.append('path')
        .data([newData])
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'blue');
    };

    const interval = setInterval(updateData, 2000);

    return () => clearInterval(interval);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default RewardCircuitVisualization;

// Usage:
// import RewardCircuitVisualization from './public/app';
// const App = () => <RewardCircuitVisualization />;