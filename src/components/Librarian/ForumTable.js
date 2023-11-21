import React from 'react';
import './ForumTable.css'; 

class RequestTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { postid: 6, username: 'Saman', text: 'very Good Book'},
        { postid: 5, username: 'Jagath', text: 'Harry Potter is must read book' },
        {  postid: 4, username: 'Chamara', text: 'Hobbit is fantastic' },
        {  postid: 3, username: 'Damith', text: 'Lord of the rings book series is fantastic' },
        
      ],
    };
  }

    handleButton1Click = (itemId) => {
      alert(`Remove Post: ${itemId}`);
    };
  
    

  renderTableHeader() {
    return (
      <tr>
        <th>Post ID</th>
        <th>Username</th>
        <th>Text</th>
        <th>Action</th>
      </tr>
    );
  }

  renderTableData() {
    return this.state.data.map((item) => {
      const { postid, username,text } = item;
      return (
        <tr key={postid}>
          <td>{postid}</td>
          <td>{username}</td>
          <td>{text}</td>
          <td>
            <button onClick={() => this.handleButton1Click(postid)}>Remove Post</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Remove Posts</h2>
        <table>
          <thead>{this.renderTableHeader()}</thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default RequestTable;

