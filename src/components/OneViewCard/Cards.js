import React , { useState, useEffect }  from  'react'
import './Cards.css'
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { FaUser } from "react-icons/fa";
// import Typography from "@material-ui/core/Typography";


function Cards() {

    const [userData, setUserData] = useState({ count: 0 });

    return (
        <>
    <div className='w-full grid grid-cols-4 grid-flow-col gap-4 m-3 text-white'>
    <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#46017a'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-evenly'>
      <p className='font-bold text-white text-2xl'>Agents</p>
      <p className='font-bold text-5xl  text-white'>
                11
      </p>
      {/* <div className=' text-white'>
          View Agents
      </div> */}
    </div>
      </Paper>


      <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#01407a'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-evenly'>
      <p className='font-bold text-white text-2xl'>Total Calls</p>
      <p className='font-bold text-5xl  text-white'>
                1654
      </p>
      {/* <div className=' text-white'>
          View Agents
      </div> */}
    </div>
      </Paper>

      <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#017a26'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-evenly'>
      <p className='font-bold text-white text-2xl'>Connected</p>
      <p className='font-bold text-5xl  text-white'>
                854
      </p>
      {/* <div className=' text-white'>
          View Agents
      </div> */}
    </div>
      </Paper>


      <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#7a0101'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-evenly'>
      <p className='font-bold text-white text-2xl'>Not Connected</p>
      <p className='font-bold text-5xl  text-white'>
                800
      </p>
      {/* <div className=' text-white'>
          View Agents
      </div> */}
    </div>
      </Paper>
    </div>
        </>
    )
}

export default Cards


