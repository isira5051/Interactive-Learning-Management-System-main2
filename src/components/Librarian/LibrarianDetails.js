import React, { useEffect, useState } from "react";
import axios from "axios";


function RequestTable() {
  const [userData2, setUserData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const[UsernameT , setUsernameT] = useState('');
  const[contactT , setContactNicT] = useState('');
  const[EmailT , setEmailT] = useState('');
  const[PassT , setPass] = useState('');
  const[RePassT , setRePass] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          role: 'librarian' 
        };
        const response = await axios.post("https://server-w9pr.onrender.com/getLibrarianData", data)
       
        if (response.data && response.data.userData2) {
          setUserData(response.data.userData2);
        } else {
          console.error("No userData2 found in the response");
        }
      } catch (error) {
        console.error("Error Occurred:", error);
      }
    };
  
    fetchData();
  }, []);

  
  const handleGoClick = () => {
    
    setShowDescription(!showDescription);
  };


  const onSubmit = ()=>
  {
        
        const data = 
        {
            UsernameT : UsernameT,
            EmailT : EmailT,
            PassT : PassT,
            contactT : contactT
        }

        if(UsernameT === '' || EmailT === '' || PassT === "" || contactT === "")
          {
              alert('enter details please')
          }
       else if(RePassT === '')
          {
              alert("Re-type password please")
          }

       else if (PassT !== RePassT)
          {
              alert("password do not match")
          }

       else
          {
            axios
            .post("https://server-w9pr.onrender.com/addLibrarianData", data)
            .then((response) => {
              
              if(response.data.message === "Username Already Exists")
              {   
                  alert("Sorry Username Taken")
      
              }
              else if(response.data.message === "Email Already Exists")
              {   
                  alert("Sorry This Email Was Already Registered")
      
              }
             
              
              
            })
            .catch((error) => {
              console.error("Error Occured:", error);
            });

            setShowDescription(false)
          }
       
       
       
  }
 

  const removeLib = (index)=>
  {
    
    const data = {
        Username: index
    }

    axios
    .post("https://server-w9pr.onrender.com/RemoveLibrarianData", data)
    .then(() => {
      
      
      
      
    })
    .catch((error) => {
      console.error("Error Occured:", error);
    });

    

  }

  const renderTableHeader = () => {
    return (
      <tr>
        <th>User ID</th>
        <th>Username</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
    );
  }

 
  const renderTableData = () => {
    return userData2.map((row) => {
    
      return (
        <tr key={row.username}>
          <td>{row.id}</td>
          <td>{row.username}</td>
          <td>{row.contact}</td>
          <td>
            <a href="/admin/librarians"><button id={row.id} onClick={() =>removeLib(row.username)}>-</button></a>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <br />
      <h2>Librarian Details</h2>
      <br />
      {userData2.length > 0 ?(
        <table>
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      ):<p>No Data Availabale</p>}
      <div>
        <div className='lib-details'>
          <button onClick={handleGoClick}>+</button>
        </div>
      </div>
      {showDescription && (
        <div className="descriptive-box" style={{ marginLeft: '200px' }}>
          <br />

          <div className="row">
            <div className="col-3" style={{ marginTop: '20px' }}>
              <input
                className="form-control"
                placeholder="Username"
                onChange={(e) => setUsernameT(e.target.value)}
              ></input><br/>
              <input className="form-control" placeholder="Email" onChange={(e) => setEmailT(e.target.value)}></input><br/>
              <input className="form-control" placeholder="Contact" onChange={(e) => setContactNicT(e.target.value)}></input><br/>
              <input className="form-control" placeholder="password" type="password"  onChange={(e) => setPass(e.target.value)}></input><br/>
              <input className="form-control" placeholder="re-password" type="password"  onChange={(e) => setRePass(e.target.value)}></input><br/>
              <br />
            </div>
            <div className="row"></div>
            <div className="col-3" style={{marginTop:'240px', marginLeft:'-500px'}}>
        
                <button
                  className="custom-button-class"
                  style={{ marginTop: '20px' }}
                  onClick={()=>onSubmit()}
                >
                  Submit
                </button>
             
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default RequestTable;