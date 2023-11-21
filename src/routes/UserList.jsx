import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import UserTable from '../components/Librarian/UserTable';

const UserList = () => {
  return (
    
    <div className="librarian">
        <Sidebar
        role="librarian"/>
        
        <div className="homeContainer">
          <Nav
          role="librarian"/>
          <div>
            <UserTable/>
            
        </div>          
        </div>
    </div>
  )
}

export default UserList;