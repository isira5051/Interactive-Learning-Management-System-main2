import React from "react";
import "./Sidebar.css";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import PeopleOutlineTwoToneIcon from "@mui/icons-material/PeopleOutlineTwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import RequestPageTwoToneIcon from "@mui/icons-material/RequestPageTwoTone";
import QueryStatsTwoToneIcon from "@mui/icons-material/QueryStatsTwoTone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PostAddTwoToneIcon from "@mui/icons-material/PostAddTwoTone";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Sidebar = (props) => {
  const navigate=useNavigate();
  const handleLogout = async () => {
    // Show a confirmation SweetAlert
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "No, cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.post('https://server-w9pr.onrender.com/logout');
          // If the user confirms, navigate to the login page
          navigate('/login');
        } catch (error) {
          console.error('Logout failed:', error);
        }
      }
    });
  };
  const role = props.role;
  console.log(role)
  const sidebarItems = {
    admin: [
      { icon: <DashboardTwoToneIcon />, text: "Dashboard", path: "/admin" },
      {
        icon: <PeopleOutlineTwoToneIcon />,
        text: "Users",
        path: "/admin/users",
      },
      {
        icon: <PersonTwoToneIcon />,
        text: "Librarians",
        path: "/admin/librarians",
      },
      { icon: <ForumTwoToneIcon />, text: "Forum", path: "/commonforum" },
      // {icon:<RequestPageTwoToneIcon/>,text:"Requests"},
      {
        icon: <QueryStatsTwoToneIcon />,
        text: "Reports",
        path: "/admin/reports",
      },
    ],
    user: [
      { icon: <DashboardTwoToneIcon />, text: "Dashboard", path: "/user" },
      {
        icon: <AutoStoriesTwoToneIcon />,
        text: "Borrowings",
        path: "/bookhistory",
      },
      { icon: <AccountCircleIcon />, text: "profile", path: "/Profile" },
      { icon: <ForumTwoToneIcon />, text: "Forum", path: "/commonforum" },
      {
        icon: <ForumTwoToneIcon />,
        text: "Notification",
        path: "/notification",
      },
    ],
    reader: [
      { icon: <DashboardTwoToneIcon />, text: "Dashboard", path: "/user" },
      {
        icon: <AutoStoriesTwoToneIcon />,
        text: "Borrowings",
        path: "/bookhistory",
      },
      { icon: <AccountCircleIcon />, text: "profile", path: "/Profile" },
      { icon: <ForumTwoToneIcon />, text: "Forum", path: "/commonforum" },
      {
        icon: <ForumTwoToneIcon />,
        text: "Notification",
        path: "/notification",
      },
    ],
    librarian: [
      { icon: <DashboardTwoToneIcon />, text: "Dashboard", path: "/librarian" },
      {
        icon: <PostAddTwoToneIcon />,
        text: "Add Book",
        path: "/librarian/addbook",
      },
      {
        icon: <PeopleOutlineTwoToneIcon />,
        text: "Users",
        path: "/librarian/userlist",
      },
      {
        icon: <AutoStoriesTwoToneIcon />,
        text: "Books",
        path: "/librarian/booklist",
      },
      {
        icon: <RequestPageTwoToneIcon />,
        text: "Requests",
        path: "/librarian/requestlist",
      },
      // {icon:<ForumTwoToneIcon/>,text:"Forum",path:"/commonforum"},
      {
        icon: <AutoStoriesTwoToneIcon />,
        text: "Book Returns",
        path: "/librarian/returns",
      },
      {
        icon: <QueryStatsTwoToneIcon />,
        text: "Reports",
        path: "/librarian/reports",
      },
    ],
  };

  const renderSideBarItems = () => {
    const items = sidebarItems[role];
    return (
      <>
        {items.map((item, index) => (
          <Link to={item.path}>
            <li key={index}>
              {item.icon}
              <span className="text-with-icon">{item.text}</span>
            </li>
          </Link>
        ))}
      </>
    );
  };
  return (
    <>
      <div className={`sidebar ${role ? "thin" : ""}`}>
        <div className="logo">
          <p>LibraLink</p>
        </div>
        <div className="center">
          <ul className="items">
            {renderSideBarItems()}
            <li>
              <ExitToAppIcon />
              <span className="text-with-icon" onClick={handleLogout}>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
