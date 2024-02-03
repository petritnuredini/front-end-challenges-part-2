import React from "react";
import "./testimonials-grid-style.css";
import TestimonialCard from "../components/testimonialcard/TestimonialCard";
import { testimonialsData } from "../data/appdata";

const TestimonialsGrid = () => {
  const { daniel, jeanette, jonathan, kira, patrick } = testimonialsData;

  return (
    <main className="testimonials_grid_screen">
      <section className="grid">
        <section className="left_side_grid">
          <section className="left_side_first_row">
            <TestimonialCard testimonial={daniel} />
            <TestimonialCard testimonial={jonathan} />
          </section>
          <section className="left_side_second_row">
            <TestimonialCard testimonial={jeanette} />
            <TestimonialCard testimonial={patrick} />
          </section>
        </section>
        <aside className="right_side_grid">
          <TestimonialCard testimonial={kira} />
        </aside>
      </section>
    </main>
  );
};

export default TestimonialsGrid;
