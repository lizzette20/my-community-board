import React from "react";
import "./Card.css"; 

const Card = ({ title, description, link, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p className="card-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default Card;