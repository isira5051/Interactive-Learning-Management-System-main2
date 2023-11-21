import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import RequestTable from '../components/Librarian/RequestTable';

const RequestList = () => {
  return (
    
    <div className="librarian">
        <Sidebar
        role="librarian"/>
        <div className="homeContainer">
          <Nav
          role="librarian"/>
          <div>
            <RequestTable/>
        </div>          
        </div>
    </div>
  )
}

export default RequestList;