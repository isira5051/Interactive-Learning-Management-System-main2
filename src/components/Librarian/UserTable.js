import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function UserTable() {
  const [userData, setUserData] = useState([]);
  const [, changeStatus] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.post("https://server-w9pr.onrender.com/UserData", {
        email: ""
      });

      setUserData(response.data.userData);
    } catch (error) {
      console.error("Error Occurred:", error);
    }
  };
  const changeUserStatus = (index, status) => {
    let data;
    if (status === 'active') {
      data = {
        Status: 'banned',
        id: index
      }
    } else {
      data = {
        Status: 'active',
        id: index
      }
    }
  
    // Show a confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to change the status to ${status === 'Active' ? 'Banned' : 'Active'}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, change the status
        (async () => {
          try {
            await axios.post("https://server-w9pr.onrender.com/changeUserStatus", data);
            changeStatus('');
            fetchData(); // Refresh the data after the status change
          } catch (error) {
            console.error("Error Occurred:", error);
          }
        })();
      }
    });
  };
  

    

  


  return (
    <div>
      {userData.length > 0 ? (
        <table className="user-data-table" style={{ marginLeft: '0px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <br />
          <tbody>
            {userData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>{row.status}</td>
                <td><button className="custom-button-class" id={row.User_ID} onClick={()=> changeUserStatus(row.id,row.status)}>change status</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user data.</p>
      )}

   


      
    
    </div>




    
  );
}

export default UserTable;
