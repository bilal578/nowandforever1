import React from 'react';
import './Article11Card.css';

const Card = ({ image, text }) => {
  return (
    <div className="cardArticle11">
      <img src={image} alt="Card Image" />
      <p>{text}</p>
    </div>
  );
};

export default Card;