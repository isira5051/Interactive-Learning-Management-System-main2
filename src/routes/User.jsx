import React, { useState } from "react";
import { useEffect } from "react";
import "./Css/User.css";
import Sidebar from "../components/Dashboard/Sidebar";
import Nav from "../components/Dashboard/Nav";
import Header from "../components/Header/Header";
import BookCard from "../components/Header/BookCard";
import { Link } from "react-router-dom";
import axios from "axios";
 
const User = () => {
  // const[auth,setAuth]=useState(false);
  // axios.defaults.withCredentials = true;
  // const navigate=useNavigate();
  // useEffect(() => {
  //   axios.get("https://server-w9pr.onrender.com/auth-status").then((response) => {
  //     console.log(response.data.auth)
  //     if(response.data.auth){
  //       setAuth(true);
  //       console.log(response.data.id);
  //      // console.log(auth);
  //       navigate('/user')
  //     }else{
  //         navigate('/login')
  //     }})

  // },[])

  const [query, setQuery] = useState(false);
  const[keyword,setKeyword]=useState("");
  const [book, setData] = useState([]);
  const[selectedOption,setSelectedOption]=useState("popular")

  const handleDropdownChange=(event)=>{
    setSelectedOption(event.target.value);
    console.log(selectedOption)
    setQuery(false);
  }
   useEffect(() => {
    async function fetchData(){
      try{
        console.log(`Fetching data for genre: ${selectedOption}`);
        const response =await axios.get(`https://server-w9pr.onrender.com/user/genreRelatedBooks?g=${selectedOption}`)
        console.log(response)
        setData(response.data)
      }
     catch (error) {
      console.error("Error fetching books:", error);
    }}
    fetchData();
}, [selectedOption]);
  

  const handleSearch = async (query) => {
    setQuery(true);
    setKeyword(query);
    console.log(query);

    try {
      const response2 = await axios.get(`https://server-w9pr.onrender.com/user/filterBooks?q=${query}`);
      setData(response2.data);
      console.log(response2);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  

  return (
    <div className="user">
      <Sidebar role="user" />
      <div className="userContainer">
        {/* <Nav role="user" /> */}
        <Nav role='user' />
        <Header handleSearch={handleSearch} />
        <div className="booklist">
        <div className="dropdown-container">
      <label  className="genre-label">Select Book Genres:</label>
      <select name="book-genres" id="book-genres" className="genre-dropdown" value={selectedOption} onChange={handleDropdownChange}>
              <option value="Popular" className="genre-option" >Popular</option>
              <option value="Mystery" className="genre-option">Mystery</option>
              <option value="Fantasy" className="genre-option">Fantasy</option>
              <option value="Romance" className="genre-option">Romance</option>
              <option value="Science-Fiction" className="genre-option">Science Fiction</option>
              <option value="Biography" className="genre-option">Biography</option>
            </select>
            {/* <p>Selected Option: {selectedOption}</p> */}
      </div>
            <div className="content-title">
              {query ? (
                <>
                  <h1>Search Results</h1>
                  <p>Here Is Your Search Results for {keyword}</p>
                  
                </>
              ) : (
                <>
                  <h1>{selectedOption}</h1>
                  <p>Find Our Popular Books in the {selectedOption} Category</p>
                  
                </>
              )}

              <div className="grid-container">
                {book.map((item, index) => {
                  return (
                    <div className="grid-item" key={index}>
                      <Link to={`/user/book/${item.id}`}>
                        <BookCard
                          image={item.image}
                          heading={item.title}
                          author={item.author}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

      </div>
     
    </div>
    
    </div>
  );
};

export default User;

