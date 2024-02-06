import React from "react";
import "./card-style.css";
import SedansCarImage from "../../assets/images/icon-sedans.svg";
import { CardProps } from "../../types/types";

const CardComponent = ({
  backgroundColor,
  description,
  image,
  title,
}: CardProps) => {
  return (
    <div
      className="card_component"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="car_type_image_container">
        <img
          src={image}
          alt={`${title} type image`}
          className="car_type_image"
        />
      </div>

      <h1 className="car_type_title">{title}</h1>

      <p className="car_type_desc">{description}</p>
      <button className="learn_more_button" style={{ color: backgroundColor }}>
        Learn More
      </button>
    </div>
  );
};

export default CardComponent;
