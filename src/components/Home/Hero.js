import React from "react";
import {Link} from 'react-router-dom';
import "./HeroStyle.css";
function Hero(props) {
  return (
    <div className={`hero ${props.cName}`}>
      <img src={props.heroImage} alt="Herping" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.btnTxt}
          </Link>
          
          </div>

      </div>
    </div>
  );
}

export default Hero;
