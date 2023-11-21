import "./SqureStyle.css";
function SqureData(props){
    return(
        <div className="sqr">
              <div className="t-card">
           <div className="t-image">
            <img src={props.image} alt="card"/>
           </div>
           <h4>{props.heading}</h4>
           <p>{props.text}</p>
        </div>
        </div>
      
    )
}
export default SqureData;