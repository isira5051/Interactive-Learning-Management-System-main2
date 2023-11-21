import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import AddBookForm from '../components/Librarian/AddBookForm';

const AddBook = () => {
  return (
    
    <div className="librarian">
        <Sidebar
        role="librarian"/>
        <div className="homeContainer">
          <Nav
          role="librarian"/>
          <div>
            <AddBookForm/>
        </div>          
        </div>
    </div>
  )
}

export default AddBook;