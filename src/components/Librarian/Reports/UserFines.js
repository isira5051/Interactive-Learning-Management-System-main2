import React from 'react';
import './ReportTableStyles.css';

class UserFines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, UserID: '3', FineAmount: '300',  ReturnDue: '2023-10-08'},
        { id: 2, UserID: '1', FineAmount: '260', ReturnDue: '2023-10-09'}, 
        { id: 3, UserID: '4', FineAmount: '260', ReturnDue: '2023-10-09'}, 
        { id: 4, UserID: '9', FineAmount: '220', ReturnDue: '2023-10-10'}, 
        { id: 5, UserID: '11', FineAmount: '220', ReturnDue: '2023-10-10'}, 
        { id: 6, UserID: '2', FineAmount: '180', ReturnDue: '2023-10-10'}, 
        { id: 7, UserID: '15', FineAmount: '180', ReturnDue: '2023-10-11'}, 
        { id: 8, UserID: '7', FineAmount: '180', ReturnDue: '2023-10-11'}, 
        { id: 9, UserID: '3', FineAmount: '140', ReturnDue: '2023-10-12'}, 
        { id: 10, UserID: '1', FineAmount: '140', ReturnDue: '2023-10-12'}, 
        { id: 11, UserID: '10', FineAmount: '100', ReturnDue: '2023-10-13'}, 
        { id: 12, UserID: '12', FineAmount: '60', ReturnDue: '2023-10-14'},    
      ],
    };
  }

  renderTableHeader() {
    return (
      <tr>
        <th></th>
        <th>User ID</th>
        <th>Fine Amount in LKR</th>
        <th>Payment Deadline</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.data.map((rowData) => {
      const { id, UserID, FineAmount, ReturnDue } = rowData;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{UserID}</td>
          <td>{FineAmount}</td>
          <td>{ReturnDue}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-container"> {/* Add a container */}
        <h2>Fines to be paid by Users</h2>
        <div className="table-scroll"> {/* Add a scrollable container */}
          <table className="data-table">
            <thead>{this.renderTableHeader()}</thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UserFines;