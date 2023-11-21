import React from 'react';
import './Css/Admin.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import LibrarianDetails from '../components/Librarian/LibrarianDetails'

const LibrarianData = () => {
  return (
    
    <div className="admin">
        <Sidebar
        role="admin"/>
        <div className="homeContainer">
          <Nav
          role="admin"/>
          <div>
            <LibrarianDetails/>
        </div>          
        </div>
    </div>
  )
}

export default LibrarianData;