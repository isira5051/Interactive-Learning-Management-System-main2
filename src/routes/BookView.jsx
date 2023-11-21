import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Navbar from '../components/Home/Navbar';
import './Css/BookView.css';
//import {Books} from './BookData'
import Forum from "../components/Forum/Forum";
import axios from "axios";
import getUser from "./utils/getUser";
import Swal from "sweetalert2";
import Sidebar from "../components/Dashboard/Sidebar";
import Footer from "../components/Home/Footer";
const BookView = () => {
  const[book,setBook]=useState(null);
  const{id:bookId}=useParams();
  const [, setImagePreviewUrl] = useState(null);
  //const book = Books.find((book)=>book.id.toString() === bookId);
  //const{title,author,image,comments,likes}=book;
  const [availability, setAvailability] = useState(0);
  const [user, setUser] = useState(null);
  const [author,setAuthor]=useState(null);
  const [reserveCount,setReserveCount]=useState(0);
  const [isReserved, setIsReserved] = useState(false);
  // useEffect(()=>{
  //   const fetchBookData = async()=>{
  //     const user = await getUser();
  //     setUser(user);
  //     try{
  //       //console.log(bookId);
  //       const response = await axios.get(`https://server-w9pr.onrender.com/user/book/${bookId}`);

  //       setBook(response.data[0]);
  //       setLikesCount(response.data[0].likes)
  //     }catch(error){
  //       console.error('Error fetching book data:', error);
  //     }
  //   };
  //   const fetchBookCount = async()=>{
  //     try{
  //       const response = await axios.get(`https://server-w9pr.onrender.com/user/book/count/${bookId}`);
  //      let response1 = response.data[0].count;
  //       //console.log(response1)
  //       setAvailability(response.data[0].count);
  //     }catch(error){
  //       console.error('Error fetching book data:', error);
  //     }};fetchBookCount();
  //   fetchBookData();
  // },[bookId]);

  const fetchBookData = async () => {
    const user = await getUser();
    setUser(user);
    try {
      const response = await axios.get(`https://server-w9pr.onrender.com/user/book/${bookId}`);
     // console.log(response.data[0])
      setBook(response.data[0]);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  const fetchBookCount = async () => {
    try {
      const response = await axios.get(`https://server-w9pr.onrender.com/user/book/count/${bookId}`);
      setAvailability(response.data[0].count);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  const getReserveCount = async () => {
    try{
      console.log(user)
      const response = await axios.get(`https://server-w9pr.onrender.com/user/book/reserveCount/${user.id}`);
      console.log(response.data[0].reservecount)
      setReserveCount(response.data[0].reservecount);
     
    }catch (error) {
      console.error("Error fetching author details:", error);
    }
  }

  const fetchAuthorDetails = async () => {
    try{
      const response = await axios.get(`https://server-w9pr.onrender.com/user/book/author/${book.author}`);
      console.log(response.data[0])
      setAuthor(response.data[0].bio);
    }catch (error) {
      //console.error("Error fetching author details:", error);
    }}

    /* eslint-disable react-hooks/exhaustive-deps */

    useEffect(() => {
      fetchBookCount();
      fetchBookData();  
    }, [bookId]);
    useEffect(() => { fetchAuthorDetails();
    }, [book]);
    useEffect(() => {
      if(user){
        getReserveCount();
      }
    }, [user]);

    /* eslint-enable react-hooks/exhaustive-deps */


    const openImagePreview = (imageUrl) => {
      setImagePreviewUrl(imageUrl);
      Swal.fire({
        title: "Book Preview",
        imageUrl: imageUrl,
        imageWidth: 400,
        imageHeight: 400,
        showCloseButton: true,
      });
    };

  //console.log(book);
  
const handleSubmit = async () => {
  // Show a confirmation SweetAlert
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to reserve this book?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, reserve it",
    cancelButtonText: "No, cancel",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const userId = user.id;
        const data = {
          bookId: bookId,
          userId: userId,
        };

        const response = await axios.post(
          "https://server-w9pr.onrender.com/user/book/reserve",
          data
        );

        // Check the response status and display a success or error SweetAlert accordingly
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Book Reserved",
            text: "The book has been successfully reserved.",
          });
          fetchBookCount();
          setIsReserved(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "Reservation Failed",
            text: "An error occurred while reserving the book. Please try again later.",
          });
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while reserving the book. Please try again later.",
        });
      }
    }
  });
};
  return (
    <>
     <Sidebar role="user" />
      <div className="nav-wrap">
        <Navbar />
      </div>
    <div className="bookView-container">
      {book ?  (<div className="column">
        <div className="img"><img src={book.image} alt="column" /></div>
        <div className="details">
          <h1>{book.title}</h1>
          <h2>Author - {book.author}</h2>
          <button onClick={() => openImagePreview('https://i.pinimg.com/originals/1a/54/21/1a54211611432b641662c75cdb00e6a4.jpg')}>Preview</button>
          {/* <div className="likes-count">
          {isLiked ? <i className="fas fa-heart" onClick={handleLikeClick}></i> : <i className="far fa-heart"onClick={handleLikeClick}></i>}
            <small className="count" >{likesCount}</small>
          </div> */}
          <div className="about-section">
            <p className="about-label">About:</p>
            <p className="about-text">
              {book.about}
            </p>
          </div>
          <div className="about-author-section">
            <p className="about-author-label">About Author:</p>
            <p className="about-author-text">
              {author}
            </p>
          </div>
        </div>
        <div className="availability">
          <p>Available Books: {availability}</p>
        </div>{
          availability>0&& !isReserved && reserveCount<2&&( <div className="reserve-button">
          <button type='submit' style={{ marginTop: '2rem' }} onClick={handleSubmit} className="btn">Reserve</button>
        </div>)
        }
       
      </div>
    ):(
      <p>Loading...</p>
      )

      }
        <div className="row">
          {book &&user && (
           
            <Forum
              comments={book.comments}
              bookId={book.id}
              user = {user}
            />
          )}
        </div>
       
    </div>
    <div className="nav-wrap">
        <Footer />
      </div>
  </>
  
  )
}

export default BookView