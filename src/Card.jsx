import React from 'react'
import "./Card.css"

function Card(props){
return (
    <div className="cards">
      <img src={props.poster} alt="Poster" className="card_img" />
      <div className="card_info">
        <p className="card_title">{props.title}</p>
        <h3 className="card_sname">{props.sname}</h3>
        <a href={props.link} target="_blank"><button className="btn">Watch Now</button></a>
      </div>
    </div>
);
}
export default Card;