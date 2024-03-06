import React from "react";
import "./three-column-preview-card-style.css";
import CardComponent from "../components/card/CardComponent";
import SedanImage from "../assets/images/icon-sedans.svg";
import SuvImage from "../assets/images/icon-suvs.svg";
import LuxuryImage from "../assets/images/icon-luxury.svg";
import { CardProps } from "../types/types";

const ThreeColumnPreviewCard = () => {
  const carTypes: CardProps[] = [
    {
      title: "Sedan.",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      image: SedanImage,
      backgroundColor: "hsl(31, 77%, 52%)",
    },
    {
      title: "SUVs.",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      image: SuvImage,
      backgroundColor: "hsl(184, 100%, 22%)",
    },
    {
      title: "Luxury.",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      image: LuxuryImage,
      backgroundColor: "hsl(179, 100%, 13%)",
    },
  ];

  return (
    <main className="three_column_preview_card_container">
      <article className="cards_container">
        {carTypes.length > 0 &&
          carTypes.map((car: CardProps) => (
            <CardComponent
              backgroundColor={car.backgroundColor}
              description={car.description}
              image={car.image}
              title={car.title}
              key={car.title}
            />
          ))}
      </article>
    </main>
  );
};

export default ThreeColumnPreviewCard;
