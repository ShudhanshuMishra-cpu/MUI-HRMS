import React , { useState, useEffect }  from  'react'
import './Cards.css'
import { BiSolidUser, BiSolidData } from 'react-icons/bi'
import { GiProgression } from 'react-icons/gi'
import {AiFillFileText} from 'react-icons/ai'
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FaUser } from "react-icons/fa";
// import Typography from "@material-ui/core/Typography";


function Cards() {

    const [userData, setUserData] = useState({ count: 0 });
//   const [progressData, setProgressData] = useState({ count: 0 });
//   const [fileData, setFileData] = useState({ count: 0 });
//   const [databaseData, setDatabaseData] = useState({ count: 0 });

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make separate requests for each count
        const [userResponse
            // , progressResponse, fileResponse, databaseResponse
        ] = await Promise.all([
          axios.get('http://192.168.2.11:5050/users/count'),
          // Add similar endpoints for progress, file, and database
        ]);

        // Update the state with the counts
        setUserData(userResponse.data);
        // setProgressData(progressResponse.data);
        // setFileData(fileResponse.data);
        // setDatabaseData(databaseResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 

    return (
        <>
    <div className='w-full grid grid-cols-4 grid-flow-col gap-4 m-3 text-white'>
    <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#79ccfc'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-between'>
      <p className='font-bold text-white'>Users</p>
      <p className='font-bold text-5xl  text-white'>
                {userData.count||0}
      </p>
      <div className=' text-white'>
          View Users
      </div>
    </div>
      </Paper>
      <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#fc5353'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-between'>
      <p className='font-bold text-white'>Users</p>
      <p className='font-bold text-5xl  text-white'>
                {userData.count||0}
      </p>
      <div className=' text-white'>
          View Users
      </div>
    </div>
      </Paper>
      <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#60e856'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-between'>
      <p className='font-bold text-white'>Users</p>
      <p className='font-bold text-5xl  text-white'>
                {userData.count||0}
      </p>
      <div className=' text-white'>
          View Users
      </div>
    </div>
      </Paper>
      <Paper className='flex justify-between text-end h-48 p-5 gap-4' style={{background:'#eda164'}} >
        <div className='w-[50%]'>
        <FaUser size={70} color={'#fff'} />
        </div>
    <div className='flex flex-col justify-between'>
      <p className='font-bold text-white'>Users</p>
      <p className='font-bold text-5xl  text-white'>
                {userData.count||0}
      </p>
      <div className=' text-white'>
          View Users
      </div>
    </div>
      </Paper>
    </div>
        </>
    )
}

export default Cards


