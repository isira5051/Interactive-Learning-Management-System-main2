import React from 'react';
import SearchForm  from './SearchForm';
import './Header.css'

const Header = ({handleSearch}) => {
  return (
    <div className="holder">
        
            <div className='header-content'>
              <div className="cont">
              <h2 className='header-title'>
                find your book of choice
               </h2>
               <p className='header-text'>
               A book search is a thrilling pursuit, a quest for knowledge, escapism, or inspiration. 
               Whether scanning shelves or scrolling through online catalogs, it's a journey where the next literary gem awaits, promising hours of discovery and wonder.
               </p>
               <SearchForm 
               onSearch={handleSearch}/>
              </div>
              
            </div>
        
    </div>
  )
}

export default Header