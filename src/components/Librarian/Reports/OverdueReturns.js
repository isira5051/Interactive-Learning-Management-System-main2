import React from 'react';
import './ReportTableStyles.css';

class OverdueReturns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, UserID: '3', BookID: '9', ReturnDue: '2023-09-08', OverdueDays: '7'},
        { id: 2, UserID: '1', BookID: '32', ReturnDue: '2023-09-09', OverdueDays: '6'}, 
        { id: 3, UserID: '4', BookID: '25', ReturnDue: '2023-09-09', OverdueDays: '6'}, 
        { id: 4, UserID: '9', BookID: '12', ReturnDue: '2023-09-10', OverdueDays: '5'}, 
        { id: 5, UserID: '11', BookID: '6', ReturnDue: '2023-09-10', OverdueDays: '5'}, 
        { id: 6, UserID: '2', BookID: '16', ReturnDue: '2023-09-10', OverdueDays: '5'}
        
      ],
    };
  }

  renderTableHeader() {
    return (
      <tr>
        <th></th>
        <th>User ID</th>
        <th>Book ID</th>
        <th>Return Due</th>
        <th>Overdue Days</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.data.map((rowData) => {
      const { id, UserID, BookID, ReturnDue, OverdueDays } = rowData;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{UserID}</td>
          <td>{BookID}</td>
          <td>{ReturnDue}</td>
          <td>{OverdueDays}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-container"> {/* Add a container */}
        <h2>Overdue Book Returns</h2>
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

export default OverdueReturns;