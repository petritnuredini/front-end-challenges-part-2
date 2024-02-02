import React from "react";
import "./rectangle-horizonta-style.css";
import { TestimonialProps } from "../../types";

interface ComponentProps {
  testimonial: TestimonialProps;
}

const RectangleHorizontal = ({ testimonial }: ComponentProps) => {
  return (
    <div
      className="testimonial_type_one"
      style={{
        width: testimonial.width,
        backgroundColor: testimonial.backgroundColor,
      }}
    >
      <div className="testimonial_header">
        <div className="profile_image_container">
          <img
            src={testimonial.image}
            alt="Profile Image"
            className="profile_image"
          />
        </div>
        <div className="testimonial_name_position">
          <p className="testimonial_name">{testimonial.name}</p>
          <p className="testimonial_position">{testimonial.position}</p>
        </div>
      </div>
      <div className="testimonial_body">
        <h1 className="testimonial_title">{testimonial.title}</h1>
        <p className="testimonial_description">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default RectangleHorizontal;
