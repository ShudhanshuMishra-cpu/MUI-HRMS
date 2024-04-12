import React, { useState, useEffect, useRef} from 'react'
import '../Dashboard/Dashboard.css'
import Cards from '../../components/OneViewCard/Cards' ;
import { PieChart } from '@mui/x-charts/PieChart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import WorkIcon from '@mui/icons-material/Work';
import Avatar from '@mui/material/Avatar';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import ReactApexChart from 'react-apexcharts'
import axios from 'axios';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useReactToPrint } from 'react-to-print';
import { DateRangePicker } from 'react-date-range';

function OneView() {
    // const [data, setData] = useState({})
    const [openDate, setOpenDate] = useState(false)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      pageStyle :"@page {size: A4 landscape;}"
  }
    );

    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })

    const handleSelect = (ranges) =>{
        console.log(ranges.selection.startDate.toDateString());
        setSelectionRange(ranges.selection)
        // setOpenDate(false)
        }

    // api part 
    // useEffect(async ()=>{
        // axios request for single api which will give data of every chart at once 
        // example api request
        // const response = await axios.get("localhost:8000/api/oneview?s=2024-04-1&f=2024-04-08")
        // example response is given below
        //  {
        //     pieData = [
        //         { label: 'Not Connected', value: 400 },
        //         { label: 'Connected', value: 600 },
        //       ],

        //     barChartData = [
        //         {
        //             name: 'shudhanshu',
        //             connected: 23,
        //             notConnected:45
        //         },
        //         {
        //             name: 'employee2',
        //             connected: 23,
        //             notConnected:45
        //         },
        //         {
        //             name: 'employee3',
        //             connected: 23,
        //             notConnected:45
        //         }
        //     ]

        // }

    // }, [startDate, endDate])


    const barChartData = {
        category: ['shudhanshu', 'yogesh', 'rida', 'nupendra', 'abc', 'xyz', 'etc'],
        series: [{
            name: 'Connected',
            data: [44, 55, 41, 64, 22, 43, 21]
        }, {
            name: 'Not Connected',
            data: [53, 32, 33, 52, 13, 44, 32]
        }],
          };


  const pieData = [
    { label: 'Not Connected', value: 400 },
    { label: 'Connected', value: 600 },
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
    <div className='bg-slate-100 min-h-[1000px] printpage' ref={componentRef} >
        <div>
        {openDate && <div className="absolute right-0 py-2 z-30 px-3 text-gray-900 rounded md:border-0 md:p-0" style={{top:'12%'}}>
            <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      /> </div>}

<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="w-full flex flex-wrap justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">One View</span>
    </div>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Filter <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>
            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>
        <li >
          <div onClick={()=>setOpenDate(!openDate)} className="block  left-0 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            {`${selectionRange.startDate.toDateString()} - ${selectionRange.endDate.toDateString()}`}
      </div>
        </li>
        <li>
          <div onClick={handlePrint} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Print</div>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

        </div>
      <div className='head-crd'>
        <Cards />
      </div>


    <div className='grid grid-cols-2 gap-4 p-4'>
      <div className='p-4 shadow-xl bg-white'>
      <p>Dispositon Count</p>     
      <PieChart
        series={[
          {
            data: [ ...pieData ],
            innerRadius: 80,
            outerRadius: 200,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: 0,
            endAngle: 360,
          }
        ]}
        height={500}
      />
      </div>
      <div className='p-4 bg-white shadow-xl'>

        <ReactApexChart options={
            {
                dataLabels: {
                  enabled: true,
                },
                plotOptions: {
                  pie: {
                    customScale: 0.8,
                    donut: {
                      size: '65%',
                    },
                    offsetY: 20,
                  },
                  stroke: {
                    colors: undefined
                  }
                },
                title: {
                  text: 'Category wise Disopsition',
                  style: {
                    fontSize: '18px'
                  }
                },
                labels: ['Positive Vote', 'Ringing Not Responded', 'Out of Service', 'abc', 'ect'],
              }
        } series={[21, 23, 19, 14, 6]} type="donut" height={600} width={700} />
        
      </div>
    </div>
    <div className='cal-main bg-white shadow-xl m-4 p-4'>
          {/* <Calendar /> */}
          <p>user wise call count</p>
          <ReactApexChart options={{
              chart: {
                type: 'bar',
                height: 430
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                  dataLabels: {
                    position: 'top',
                  },
                }
              },
              dataLabels: {
                enabled: true,
                offsetX: -6,
                style: {
                  fontSize: '12px',
                  colors: ['#fff']
                }
              },
              stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
              },
              tooltip: {
                shared: true,
                intersect: false
              },
              xaxis: {
                categories: barChartData.category,
              },
            //   uncomment to change color of bars
            // colors:['#F44336', '#E91E63', '#9C27B0']
            }} series={barChartData.series} type="bar" height={700} width={'90%'} />
        </div>
    <div className='grid grid-cols-3 gap-4 p-4'>
        
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


export default OneView