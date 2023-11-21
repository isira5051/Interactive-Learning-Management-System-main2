import React from 'react';
import './Css/Librarian.css';
import Nav from '../components/Dashboard/Nav';
import Sidebar from '../components/Dashboard/Sidebar';
import OverdueReturns from '../components/Librarian/Reports/OverdueReturns';

// const ReportOverdueReturns = () => {
//   return (
    
//     <div className="librarian">
//         <Sidebar
//         role="librarian"/>
//         <div className="homeContainer">
//           <Nav
//           role="librarian"/>
//           <div>
//             <OverdueReturns/>
//         </div>          
//         </div>
//     </div>
//   )
// }
const ReportOverdueReturns = ({ role }) => {
  return (
    <div className="librarian">
      <Sidebar role={role} />
      <div className="homeContainer">
        <Nav role={role} />
        <div>
          <OverdueReturns role={role} />
        </div>
      </div>
    </div>
  );
};
export default ReportOverdueReturns;