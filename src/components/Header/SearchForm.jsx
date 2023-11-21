import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchForm.css";
const SearchForm = ({onSearch}) => {
  const[query,setQuery] = useState("");
  const handleSearch = (e) => {
    // Call the provided onSearch function with the query
    e.preventDefault();
    onSearch(query);
  };
    
  return (
    <div className="search-form1">
      <div className="formContainer">
        <div className="search-form-content">
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-form-element">
              <input type="text" className="form-control" placeholder="Find books and authors that you'll love." onChange={(e)=>setQuery(e.target.value)}/>
              <button type="submit" className="btnClass" >
              <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
