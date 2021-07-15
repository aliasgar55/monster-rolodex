import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`http://robohash.org/${props.monster.id}?size=180x180`}
        alt="monster"
        width="180px"
        height="180px"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
