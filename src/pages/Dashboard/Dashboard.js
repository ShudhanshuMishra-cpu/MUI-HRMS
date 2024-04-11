import React from 'react'
import './Dashboard.css'
import Chart from "react-apexcharts"
import { BsArrowUpRight } from "react-icons/bs"
import { AreaChart,LineChart, Area, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Table from './Table/Table';
import ToDoList from './ToDoApp/ToDoList';
import Calendar from 'react-calendar';
import './Calender/Calender.css'
import Cards from './BulbCards/Cards' ;
import { PieChart } from '@mui/x-charts/PieChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';


function Dashboard() {

  const pieData = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
  ];
  
  const settings = {
    width: 200,
    height: 200,
    value: 60,
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 3000,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 3000
    }
  ];

  let announcements = [
    {
      msg:'sense of urgency',
      date:'Jan 7, 2024'
    }
  ]


  const chartSetting = {
    yAxis: [
      {
        label: 'employees',
      },
    ],
    // width: 1000,
    // height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  const dataset = [
    {
      new: 59,
      left: 57,
      existing: 86,
      increment: 21,
      month: 'Jan',
    },
    {
      new: 50,
      left: 52,
      existing: 78,
      increment: 28,
      month: 'Fev',
    },
    {
      new: 47,
      left: 53,
      existing: 106,
      increment: 41,
      month: 'Mar',
    },
    {
      new: 54,
      left: 56,
      existing: 92,
      increment: 73,
      month: 'Apr',
    },
    {
      new: 57,
      left: 69,
      existing: 92,
      increment: 99,
      month: 'May',
    },
    {
      new: 60,
      left: 63,
      existing: 103,
      increment: 144,
      month: 'June',
    },
    {
      new: 59,
      left: 60,
      existing: 105,
      increment: 319,
      month: 'July',
    },
    {
      new: 65,
      left: 60,
      existing: 106,
      increment: 249,
      month: 'Aug',
    },
    {
      new: 51,
      left: 51,
      existing: 95,
      increment: 131,
      month: 'Sept',
    },
    {
      new: 60,
      left: 65,
      existing: 97,
      increment: 55,
      month: 'Oct',
    },
    {
      new: 67,
      left: 64,
      existing: 76,
      increment: 48,
      month: 'Nov',
    },
    {
      new: 61,
      left: 70,
      existing: 103,
      increment: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value} employees`;

  return (
    <div className='bg-slate-100 min-h-[1000px]' >
      <div className='head-crd'>
        <Cards />
      </div>


<div className='grid grid-cols-3 gap-4 p-4'>
      <div className='p-4 shadow-xl bg-white'>
      <p>Candidate Analysis</p>     
      <PieChart
        series={[
          {
            data: [ ...pieData ],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          }
        ]}
        height={300}
      />
      </div>
      <div className='p-4 bg-white shadow-xl'>
        <p>Attendence</p>
        <div className='grid grid-cols-2 mt-4 gap-4'>
        <div><Gauge
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#52b202',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      />
      <p className='text-center'>Today</p></div>
        <div><Gauge
        className='w-full'
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: '#52b202',
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      ></Gauge>
      <p className='text-center'>month</p>
      </div>
        </div>
        
      </div>
      <div className='p-4 bg-white shadow-xl'>
        <p>Announcements</p>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {announcements.map((i)=>{
          return <>
          <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={i.msg} secondary={i.date} />
      </ListItem>
          </>
        })}
        </List>
      </div>
    </div>
    <div className='grid grid-cols-3 gap-4 p-4'>
        <div className='cal-main bg-white shadow-xl'>
          <Calendar />
        </div>
        <div className='col-span-2 pl-4 bg-white shadow-xl'>
        <BarChart
        className=' ml-4'
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'new', label: 'New', valueFormatter },
        { dataKey: 'left', label: 'Left', valueFormatter },
        { dataKey: 'existing', label: 'Exsiting', valueFormatter },
        { dataKey: 'increment', label: 'Increment', valueFormatter },
      ]}
      {...chartSetting}
    />

        </div>
        </div>
    </div>
  )
}


export default Dashboard