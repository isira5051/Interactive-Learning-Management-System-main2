import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import UserFines from '../components/Librarian/Reports/UserFines';

const ReportUserFines = ({role}) => {
  return (
    
    <div className="librarian">
        <Sidebar
        role={role}/>
        <div className="homeContainer">
          <Nav
          role={role}/>
          <div>
            <UserFines role={role}/>
        </div>          
        </div>
    </div>
  )
}

export default ReportUserFines;