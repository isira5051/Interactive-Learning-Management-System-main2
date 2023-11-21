import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import UserTable from '../components/Librarian/ForumTable';

const RemovePosts = () => {
  return (
    
    <div className="admin">
        <Sidebar
        role="admin"/>
        <div className="homeContainer">
          <Nav
          role="admin"/>
          <div>
            <UserTable/>
        </div>          
        </div>
    </div>
  )
}

export default RemovePosts;