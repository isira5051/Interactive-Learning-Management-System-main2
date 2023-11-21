import React, { useEffect, useState } from "react";
import "./RequestTable.css";
import axios from "axios";
import Swal from "sweetalert2";

function RequestTable() {
  const [userData3, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://server-w9pr.onrender.com/getUserRequestBooks",
        {}
      );
      setUserData(response.data.userData3);
    } catch (error) {
      console.error("Error Occurred:", error);
    }
  };

  // const acceptRequest = async (res_id) => {
  //   try {
  //     await axios.post("https://server-w9pr.onrender.com/acceptReservation", { res_Id: res_id });
  //     fetchData(); // Update the table after accepting
  //   } catch (error) {
  //     console.error("Error Occurred:", error);
  //   }
  // };

  // const rejectRequest = async (res_id) => {
  //   try {
  //     await axios.post("https://server-w9pr.onrender.com/removeReservation", { res_Id: res_id });
  //     fetchData(); // Update the table after rejecting
  //   } catch (error) {
  //     console.error("Error Occurred:", error);
  //   }
  // }
  const confirmAccept = (res_id) => {
    Swal.fire({
      title: "Confirm Acceptance",
      text: "Are you sure you want to accept this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Accept",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        acceptRequest(res_id); // If confirmed, proceed with accepting
      }
    });
  };

  const confirmReject = (res_id) => {
    Swal.fire({
      title: "Confirm Rejection",
      text: "Are you sure you want to reject this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Reject",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        rejectRequest(res_id); // If confirmed, proceed with rejecting
      }
    });
  };

  const acceptRequest = async (res_id) => {
    try {
      await axios.post("https://server-w9pr.onrender.com/acceptReservation", {
        res_Id: res_id,
      });
      fetchData(); // Update the table after accepting
      Swal.fire({
        icon: "success",
        title: "Request Accepted",
        text: "The request has been accepted successfully.",
      });
    } catch (error) {
      console.error("Error Occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while accepting the request.",
      });
    }
  };

  const rejectRequest = async (res_id) => {
    try {
      await axios.post("https://server-w9pr.onrender.com/removeReservation", {
        res_Id: res_id,
      });
      fetchData(); // Update the table after rejecting
      Swal.fire({
        icon: "success",
        title: "Request Rejected",
        text: "The request has been rejected successfully.",
      });
    } catch (error) {
      console.error("Error Occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while rejecting the request.",
      });
    }
  };
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <table className="user-data-table" style={{ marginLeft: "0px" }}>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Book</th>
            <th>Reservation Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {userData3.map((row) => (
            <tr key={row.id}>
              <td>{row.res_Id}</td>
              <td>{row.userId}</td>
              <td>{row.bookId}</td>
              <td>{row.title}</td>
              <td>{row.res_time}</td>

              <td>
              <button onClick={() => confirmAccept(row.res_Id)}>Accept</button>
        <button onClick={() => confirmReject(row.res_Id)}>Reject</button>
                  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RequestTable;
