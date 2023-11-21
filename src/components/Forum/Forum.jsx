import React, { useState } from "react";
import axios from "axios";
import "./Forum.css";
import Edit from "../../assests/edit/edit.png";
import Delete from "../../assests/edit/delete.png";
import Swal from "sweetalert2";
//import { updateBookComments,Books } from '../../routes/BookData';
const Forum = (props) => {
  //console.log(props.bookId);
  //const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comments, setComments] = useState(props.comments);
  const [book] = useState(props.bookId);
  const [user] = useState(props.user);
  const [editingComment, setEditingComment] = useState(null);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }
  };

  const handleEditClick = (comment) => {
    setEditingComment(comment);
    setCommentText(comment.userComment);
  };



const handleDeleteClick = async (commentId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Do you want to delete this comment?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "No, cancel",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `https://server-w9pr.onrender.com/user/book/comment/${book}/${commentId}`
        );
        if (response.status === 200) {
          const updatedComments = comments.filter(
            (comment) => comment.id !== commentId
          );
          setComments(updatedComments);
          Swal.fire({
            icon: "success",
            title: "Comment Deleted",
            text: "The comment has been deleted successfully.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete comment. Unexpected status code: " + response.status,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error while deleting comment: " + error.message,
        });
      }
    }
  });
};

  // console.log(user);
  // console.log(user.username);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (commentText !== "") {
      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to submit this comment?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, submit it",
        cancelButtonText: "No, cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (editingComment !== null) {
            const updatedComments = comments.map((comment) =>
              comment.id === editingComment.id
                ? { ...comment, userComment: commentText }
                : comment
            );
            setComments(updatedComments);
            setEditingComment(null);
            try {
              const response = await axios.put(
                `https://server-w9pr.onrender.com/user/book/comment/${book}/${editingComment.id}`,
                { userComment: commentText }
              );
              if (response.status === 200) {
                Swal.fire({
                  icon: "success",
                  title: "Comment Updated",
                  text: "Your comment has been updated successfully.",
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Failed to update comment. Unexpected status code: " + response.status,
                });
              }
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error while updating comment: " + error.message,
              });
            }
          } else {
            const newFeedback = {
              id: comments.length + 1,
              userName: user.username,
              uId: user.id,
              userComment: commentText,
              typeOfFeedback: isLiked,
            };
            const updatedComments = [...comments, newFeedback];
            const data = { id: book, comments: JSON.stringify(updatedComments )};
            try {
              const response = await axios.post(
                "https://server-w9pr.onrender.com/user/book/comment",
                data
              );
              if (response.status === 201) {
                Swal.fire({
                  icon: "success",
                  title: "Comment Added",
                  text: "Your comment has been added successfully.",
                });
                setComments(updatedComments);
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Failed to add comment. Unexpected status code: " + response.status,
                });
              }
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error while adding comment: " + error.message,
              });
            }
          }
  
          setCommentText("");
          setIsLiked(false);
        }
      });
    }
  };

  return (
    <>
      <div className="container2">
        <form className='forum_form'onSubmit={handleSubmit}>
          <div
            className="heart__icon center__display"
            onClick={handleLikeClick}
          >
            {isLiked ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </div>

          <div className="form__info center__display">
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Your user name"
              value={user && user.username}
              readOnly
              // onChange={(e) => setUserName(e.target.value)}
            />
            {/* <div className="editComment">
            {user &&(currentUser.username === post.username) &&(<div className="edit">
            <Link to={`/write?edit=2`} state={post}>  <img src={Edit} alt=""></img></Link>
             
               <img onClick={handleDelete} src={Delete} alt=""></img>
          </div>)}
            </div> */}

            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a short comment here"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {!editingComment &&
        <div className="comments__container center__display">
        {comments.map((item) => (
          <div className="comment__card" key={item.id}>
            <div className="pic center__display">
              {item.userName.charAt(0)}
            </div>
            <div className="comment__info">
              <div className="commentHeader">
                <div className="names">
                  <small className="nickname">{item.userName}</small>
                </div>
                {console.log(item.uId, user.id)}
                {user && item && item.uId === user.id && (
                  <div className="commentIcons">
                    <img src={Edit} alt="Edit" className="img" onClick={() => handleEditClick(item)}/>
                    <img src={Delete} alt="Delete" className="img"  onClick={() => handleDeleteClick(item.id)}/>
                  </div>
                )}
              </div>

              <p className="comment">{item.userComment}</p>
              <div className="comment__bottom">
                <div className="heart__icon--comment">
                  {item.typeOfFeedback ? (
                    <i className="fas fa-heart positive"></i>
                  ) : (
                    <i className="far fa-heart"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>}
        
      </div>
    </>
  );
};

export default Forum;
