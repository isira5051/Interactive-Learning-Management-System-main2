
import '../Widget/Widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Widget = ({ type }) => {
  let data;
  const [booksCount, setBooksCount] = useState(0);
  const [usercount, setUserCount] = useState(0);
  const[reqCount , setReqCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://server-w9pr.onrender.com/CountDataFromDatabase', {});
        setBooksCount(response.data.bookCount);
        setUserCount(response.data.userCount);
        setReqCount(response.data.requestCount);
      } catch (error) {
        console.error('Error Occurred:', error);
        
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        link: 'See All Users',
        count:usercount,
        icon: <PersonOutlineOutlinedIcon className='icon' />,
      };
      break;
    case 'books':
      data = {
        title: 'BOOKS',
        link: 'See All Books',
        count:booksCount,
        icon: <ImportContactsOutlinedIcon className='icon' />,
      };
      break;
    case 'requests':
      data = {
        title: 'REQUESTS',
        link: 'See All Requests',
        count:reqCount,
        icon: <MessageOutlinedIcon className='icon' />,
      };
      break;
    case 'recent':
      data = {
        title: 'RECENT',
        link: 'See Recent Activities',
        icon: <ChecklistOutlinedIcon className='icon' />,
      };
      break;
    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.count}</span> 
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='Number'>
          <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;