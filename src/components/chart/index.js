import React from "react";
import "./chart.css";
import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip } from 'recharts';

function Chart(props) {
  const data = [
    { name: "January", users: props.data[0] },
    { name: "February", users: props.data[1] },
    { name: "March", users: props.data[2] },
    { name: "April", users: props.data[3] },
    { name: "May", users: props.data[4] },
    { name: "June", users: props.data[5] },
    { name: "July", users: props.data[6] },
    { name: "August", users: props.data[7] },
    { name: "September", users: props.data[8] },
    { name: "October", users: props.data[9] },
    { name: "November", users: props.data[10] },
    { name: "December", users: props.data[11] },
  ];

const COLORS = ['#0088FE','#90ff35', '#00C49F', '#FFBB28', '#FF8042','#1300e0','#01FF50','#f3f2ff','#ff4d88','#f4fa85','#8a23ba','#2380ba'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  return (
    <div style={{ textAlign: "center" }}>
      <ResponsiveContainer width="100%" height="100%">
      <div className="app-chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip/>
        </PieChart>
      </div></ResponsiveContainer>
    </div>
  );
}

export default Chart;
