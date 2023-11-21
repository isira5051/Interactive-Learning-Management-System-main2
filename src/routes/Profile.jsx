import React, { useState, useEffect } from "react";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import Footer from "../components/Home/Footer";
import getUser from "./utils/getUser";
import userImg from "../../src/assests/user.png";
import axios from "axios";
import Swal from "sweetalert2";
import "./Css/profile.css";
const Profile = () => {
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUser();
      console.log(fetchedUser);
      setUser(fetchedUser);
      setName(fetchedUser.username);
    };
    fetchData();
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };
  const handleSaveClick = async () => {
    if (currentPassword === "" || password === "") {
      // Display a message using SweetAlert that both fields are required
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Both current password and new password are required.",
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to save the changes to your profile?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, save it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // The user clicked "Yes, save it!"
        saveProfile();
      }
    });
  };
  const saveProfile = async () => {
    try {
      // Make an API request to update the user's profile
      const response = await axios.put("https://server-w9pr.onrender.com/profile-change", {
        id: user.id,
        name,
        currentPassword,
        password,
      });
  
      if (response.status === 200) {
        // Profile updated successfully
        console.log("profile updated successfully");
        setCurrentPassword("");
        setPassword("");
        setEditing(false);
  
        // Show SweetAlert success popup
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been updated successfully!",
        });
      } else if (response.status === 400) {
        // Password doesn't match, display an error message using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Password Mismatch",
          text: "The provided current password is incorrect. Please try again.",
        });
      } else {
        // Handle other errors - show an error message using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while updating your profile.",
        });
      }
    } catch (error) {
      // Handle network or other errors using SweetAlert
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "There was a network error while updating your profile. Please try again later.",
      });
    }
  };
  
  const handleCancelClick = () => {
    setName(user.username);
    setEditing(false);
  };

  return (
    <>
      <Sidebar role="user" />
      <div className="nav-wrap">
        <Navbar />
      </div>
      {/* <div className="back">
      <button className='back-btn'><Link to='/user'>Go back</Link></button>
      </div> */}
      {user && (
        <div className="user-container">
          <div className="user-image">
            <img src={userImg} alt="User's Profile" />
          </div>
          <div className="user-details">
            {isEditing ? (
              <>
                <p>
                  <strong>Name: </strong>
                  <input
                    className="profile-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </p>
                <p>
                  <strong>Current Password: </strong>
                  <input
                    className="profile-input"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </p>
                <p>
                  <strong>Password: </strong>
                  <input
                    className="profile-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </p>

                <button className="left-button" onClick={handleSaveClick}>
                  Save
                </button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <>
                <h1>User Details</h1>
                <p>
                  <strong>Name: </strong>
                  {name}
                </p>

                <p>
                  <strong>Password: </strong>********
                </p>
                <button className="custom-btn" onClick={handleEditClick}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="nav-wrap">
        <Footer />
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Profile;
