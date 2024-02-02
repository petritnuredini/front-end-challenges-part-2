import React from "react";
import "./testimonials-grid-style.css";
import RectangleHorizontal from "../components/rectanglehorizontal/RectangleHorizontal";
import Jonathan from "../components/jonathan/Jonathan";
import Jeanette from "../components/jeanette/Jeanette";
import Patrick from "../components/patrick/Patrick";
import Kira from "../components/kira/Kira";
import { testimonialsData } from "../data/appdata";

const TestimonialsGrid = () => {
  const { daniel, jeanette, jonathan, kira, patrick } = testimonialsData;

  return (
    <main className="testimonials_grid_screen">
      <section className="grid">
        <section className="left_side_grid">
          <section className="left_side_first_row">
            <RectangleHorizontal testimonial={daniel} />
            <RectangleHorizontal testimonial={jonathan} />
          </section>
          <section className="left_side_second_row">
            <RectangleHorizontal testimonial={jeanette} />
            <RectangleHorizontal testimonial={patrick} />
          </section>
        </section>
        <aside className="right_side_grid">
          <RectangleHorizontal testimonial={kira} />
        </aside>
      </section>
    </main>
  );
};

export default TestimonialsGrid;
