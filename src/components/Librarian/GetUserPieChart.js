import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
} from "recharts";

function GetUserPieChart() {
  const data = [
    { name: "Active Users", users: 6, fill: '#0000b6' },
    { name: "Suspended User", users: 1, fill: '#000040' },
    { name: "Banned Users", users: 0, fill: '#490052' }, 
  ];

  return (
    <div className="App">
      <PieChart width={600} height={400}>
        <Pie
          dataKey="users"
          isAnimationActive={true}
          data={data}
          cx={300}
          cy={150}
          outerRadius={100}
          label
        />
        <Tooltip/>
      </PieChart>
    </div>
  );
};

export default GetUserPieChart;