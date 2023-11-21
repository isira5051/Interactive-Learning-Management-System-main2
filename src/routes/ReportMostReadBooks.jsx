import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import MostReadBooksTable from '../components/Librarian/Reports/MostReadBooks';

const ReportMostReadBooks = ({role}) => {
  return (
    
    <div className="librarian">
        <Sidebar role={role}
       />
        <div className="homeContainer">
          <Nav
           role={role}/>
          <div>
            <MostReadBooksTable role={role}/>
        </div>          
        </div>
    </div>
  )
}

export default ReportMostReadBooks;