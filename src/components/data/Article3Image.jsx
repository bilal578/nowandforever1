import React from "react";
import "../../components/pages/Article3/Section02/Section02.css"

const ImageCard = ({ image, description }) => (
  <div className="card-art2-sec2">
    <img src={image} alt={description} />
    <p>{description}</p>
  </div>
);

export default ImageCard;
