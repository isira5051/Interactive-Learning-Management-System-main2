import React from "react";
import "./BookCard.css";
const BookCard = (props) => {
  return (
    <div className="bookcard">
      <div className="t-card">
        <div className="t-image">
          <img src={props.image} alt="bookcard"/>
        </div>
        <h4>{props.heading}</h4>
        <h4>{props.author}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default BookCard;
