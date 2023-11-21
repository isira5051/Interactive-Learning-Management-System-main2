import React, { useState, useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import "./Css/BookHistory.css";
import Footer from "../components/Home/Footer";
import Sidebar from "../components/Dashboard/Sidebar";
import axios from "axios";
import getUser from "../routes/utils/getUser";
import Swal from "sweetalert2";
const BookHistory = () => {
  const [reservations, setReservations] = useState([]);
  const [borrowings, setBorrowings] = useState([]);
  const [, setUser] = useState("");
  useEffect(() => {
    // Create a function to fetch reservations data
    const fetchReservations = (userId) => {
      return axios.get(`https://server-w9pr.onrender.com/reservations/${userId}`);
    };

    // Create a function to fetch borrowings data
    const fetchBorrowings = (userId) => {
      return axios.get(`https://server-w9pr.onrender.com/borrowings/${userId}`);
    };

    // Fetch user data first
    getUser()
      .then((fetchedUser) => {
        setUser(fetchedUser);
        // Once user data is available, make both reservations and borrowings data requests
        return Promise.all([
          fetchReservations(fetchedUser.id),
          fetchBorrowings(fetchedUser.id),
        ]);
      })
      .then((responses) => {
        const [reservationsResponse, borrowingsResponse] = responses;
        setReservations(reservationsResponse.data);
        setBorrowings(borrowingsResponse.data);
        console.log("Reservations data:", reservationsResponse.data);
        console.log("Borrowings data:", borrowingsResponse.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateReservationsAfterRemoval = (reservationId) => {
    // Filter the reservations to exclude the removed reservation
    const updatedReservations = reservations.filter(
      (reservation) => reservation.res_Id !== reservationId
    );
    setReservations(updatedReservations);
  };

  
  const handleRemoveReservation = (reservationId, isbn) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to remove this reservation?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(reservationId, isbn);
          const response = await axios.post(
            "https://server-w9pr.onrender.com/removeReservation",
            {
              reservationId,
              isbn,
            }
          );
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Reservation Removed",
              text: "The reservation has been successfully removed.",
            });
            updateReservationsAfterRemoval(reservationId);
          }
        } catch (error) {
          // Handle errors
          console.error("Error removing reservation:", error);
          // Show an error SweetAlert
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while removing the reservation.",
          });
        }
      }
    });
  };
  const handleExtension = (borrowingId) => {
    console.log(borrowingId);
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to add an extension?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.put(
            `https://server-w9pr.onrender.com/addExtension/${borrowingId}`,
            
          );
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Extension Added",
              text: "The extension has been successfully added.",
            });
            handleExtension(borrowingId);
          }
        } catch (error) {
          // Handle errors
          console.error("Error adding extension:", error);
          // Show an error SweetAlert
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while adding the extension.",
          });
        }
      }
    });
  };

  const formatIsoDate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString(); // Change the format here as needed
    return formattedDate;
  };

    const formatDaysRemaining = (daysRemaining) => {
      const { days, hours, minutes } = daysRemaining;
      const formattedDays = days !== undefined ? `${days} days` : '0 days';
      const formattedHours = hours !== undefined ? `${hours} hours` : '0 hours';
      const formattedMinutes = minutes !== undefined ? `${minutes} minutes` : '0 minutes';
      return `${formattedDays} ${formattedHours} ${formattedMinutes} `;
 
    
  };

  return (
    <>
      <div className="history-main">
        <Sidebar role="user" />
        <div className="nav-wrap">
          <Navbar />
        </div>

        <div className="borrowingContainer">
          <div className="Reserve">
            <h1 className="borrowing-title">Reservings</h1>
            <table className="borrowing-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>ID</th>
                  <th>Reserve Date</th>
                  <th>Days Remaining</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation.res_Id}>
                    <td>{reservation.title}</td>
                    <td>{reservation.bookId}</td>
                    <td>{formatIsoDate(reservation.res_time)}</td>
                    <td>{formatDaysRemaining(reservation.days_remaining)}</td>
                    <td>
                      <button
                        className="reservation-button"
                        onClick={() =>
                          handleRemoveReservation(
                            reservation.res_Id,
                            reservation.isbn
                          )
                        }
                      >
                        Remove Reservation
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="current">
            <h1 className="borrowing-title">Current Borrowings</h1>
            <table className="borrowing-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>ID</th>
                  <th>Borrow Date</th>
                  <th>Return Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {borrowings
                  .filter((borrowing) => borrowing.return_status === "no")
                  .map((borrowing) => {
                    const returnDate = new Date(borrowing.returndate);
                    const today = new Date();
                    const daysDifference = Math.floor(
                      (returnDate - today) / (1000 * 60 * 60 * 24)
                    );
                    console.log(daysDifference);
                    return (
                      <tr key={borrowing.id}>
                        <td>{borrowing.title}</td>
                        <td>{borrowing.id}</td>
                        <td>{formatIsoDate(borrowing.borrowdate)}</td>
                        <td>{formatIsoDate(borrowing.returndate)}</td>
                        <td>
                          {daysDifference <= 0 && daysDifference >= -7 && borrowing.extension_notes==='no'  && (
                            <button
                              className="extension-button"
                              onClick={() => handleExtension(borrowing.id)}
                            >
                              Add Extension
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="fast">
            <h1 className="borrowing-title">Past Borrowings</h1>
            <table className="borrowing-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>ID</th>
                  <th>Borrow Date</th>
                  <th>Return Date</th>
                </tr>
              </thead>
              <tbody>
                {borrowings
                  .filter((borrowing) => borrowing.return_status === "yes")
                  .map((borrowing) => (
                    <tr key={borrowing.id}>
                      <td>{borrowing.title}</td>
                      <td>{borrowing.id}</td>
                      <td>{formatIsoDate(borrowing.borrowdate)}</td>
                      <td>{formatIsoDate(borrowing.returndate)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="nav-wrap">
          <Footer />
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default BookHistory;
