import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate objects
function createData(month, amount) {
  return { month, amount };
}

const data = [
  createData('Jan', 50),
  createData('Feb', 300),
  createData('Mar', 600),
  createData('Apr', 800),
  createData('May', 1500),
  createData('Jun', 2000),
  createData('Jul', 2590),
  createData('Aug', 2900),
  createData('Sep', 4020),
  createData('Oct', 5500),
  createData('Nov', 7500),
  createData('Dec', 9500),
];

export default function Chart() {
  const theme = useTheme();
    console.log(data);
  return (
    <React.Fragment>
      <Title>New users in 2021</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            bottom: 0,
            left: 16,
          }}
        >
          <XAxis dataKey="month" stroke={theme.palette.text.secondary}>
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
            Users (thousands)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}