import React from "react";
import "./card-style.css";
import PropTypes from "prop-types";
import { CardProps } from "../../types/types";

const CardComponent = ({
  backgroundColor,
  description,
  image,
  title,
}: CardProps) => {
  return (
    <section
      className="card_component"
      style={{ backgroundColor: backgroundColor }}
      aria-label={`${title} card`}
    >
      <div className="car_type_image_container">
        <img src={image} alt={`${title} car`} className="car_type_image" />
      </div>
      <h2 className="car_type_title">{title}</h2>
      <p className="car_type_desc">{description}</p>
      <button
        className="learn_more_button"
        style={{ color: backgroundColor }}
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </button>
    </section>
  );
};

// PropType validation for better type-checking and error handling
CardComponent.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardComponent;
