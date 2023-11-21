import React from 'react';
import './ReportTableStyles.css';

class MostReadBooksTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, ISBN: 'ISBN-111', Name: "Harry Potter and Philosopher's Stone", Author: "J.K. Rowling", TotalBorrows: 192},
        { id: 2, ISBN: 'ISBN-999', Name: 'The Game Of Thrones', Author: "George R.R Martin", TotalBorrows: 180},
        { id: 3, ISBN: "ISBN-1010", Name: "The Return Of The King", Author: "J.R.R Tolkin", TotalBorrows: 173},
        { id: 4, ISBN: "ISBN-555", Name: "Harry Potter and the Order Of Phoenix", Author: "J.K Rowling", TotalBorrows: 166}
      ],
    };
  }

  renderTableHeader() {
    return (
      <tr>
        <th></th>
        <th>ISBN Number</th>
        <th>Book Title</th>
        <th>Author</th>
        <th>Total Borrows per Year</th>
      
      </tr>
    );
  }

  renderTableData() {
    return this.state.data.map((rowData) => {
      const { id, ISBN, Name, Author, TotalBorrows } = rowData;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{ISBN}</td>
          <td>{Name}</td>
          <td>{Author}</td>
          <td>{TotalBorrows}</td>
        
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-container"> {/* Add a container */}
        <h2>Most Read Book Data</h2>
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

export default MostReadBooksTable;