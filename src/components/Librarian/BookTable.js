import React from 'react';
import './BookTable.css';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function BookTable() {
  const [userData, setUserData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://server-w9pr.onrender.com/getBooksDataFomDatabase", {
         
        });

        setUserData(response.data.userData3);
      } catch (error) {
        console.error("Error Occurred:", error);
      }
    };

    fetchData();
  }, []);

 
  return (
    <div>
      
        <table className="user-data-table" style={{ marginLeft: '0px' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>ISBN</th>
              <th>Name</th>
              <th>Author</th>
             
            </tr>
          </thead>
          <br />
          <tbody>
            {userData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.isbn}</td>
                <td>{row.title}</td>
                <td>{row.author}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
    </div> 
  );
}

export default BookTable;
