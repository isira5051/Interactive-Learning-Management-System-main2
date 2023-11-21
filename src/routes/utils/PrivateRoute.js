import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PrivateRoute = (props) => {
  const [auth, setAuth] = useState(false);
  const [, setname] = useState({});
  const [role, setrole] = useState({});
  const [, setid] = useState({});
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const { allowedRoles, children } = props;
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getAuth = async () => {
      try {
        const response = await axios.get("https://server-w9pr.onrender.com/auth-status");
        //console.log(response);
        if (response.data.auth) {
          setAuth(true);
          setname(response.data.userName);
          setid(response.data.id);
          setrole(response.data.role);  

        } else {
          setAuth(false);
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    getAuth();
  }); // Make sure to include an empty dependency array to run the effect only once
  // Return the JSX for rendering the component
//   console.log("auth:", auth);
// console.log("allowedRoles:", allowedRoles);
// console.log("role:", role);
  return !loading ? (
    <div>
       
      {auth && allowedRoles.includes(role) ? (
        <>{children}</>
      ) : (
        <>
            <h1>Access Denied</h1>
            <h3>Sorry, you don't have access to this page</h3>
        </>
      )}
    </div>
  ) : null;

};

export default PrivateRoute;