import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import CreateReports from '../components/Librarian/CreateReports';


// const Reports = () => {
//   return (
    
//     <div className="librarian">
//         <Sidebar
//         role="librarian"/>
//         <div className="homeContainer">
//           <Nav
//           role="librarian"/>
//           <div>
//             <CreateReports/>
//         </div>          
//         </div>
//     </div>
//   )
// }
const Reports = ({ role }) => {
  return (
    <div className="librarian">
      <Sidebar role={role} />
      <div className="homeContainer">
        <Nav role={role} />
        <div>
          <CreateReports role={role} />
        </div>
      </div>
    </div>
  );
};


export default Reports;