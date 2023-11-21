import React from 'react';
import './CreateReports.css';
import { Link } from 'react-router-dom';

function CreateReports({role}) {
  return (
    <>
    <h1><center>Generate Report</center></h1>
    <div className="button-container">
      <Link to = {`/${role}/reports/mostreadbooks`}>
        <button className="report-button">Most Read Books</button>
      </Link>
    </div>
    <div className="button-container">
      <Link to = {`/${role}/reports/overduereturns`}>
        <button className="report-button">Return Overdue Books</button>
      </Link>
    </div>
    <div className="button-container">
      <Link to = {`/${role}/reports/userfines`}>
        <button className="report-button">Calculate Fines</button>
      </Link>
    </div>
    </>
    );
}

export default CreateReports;

