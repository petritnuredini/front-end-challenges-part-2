import React from "react";
import "./card-style.css";
import IllustrationHero from "../assets/images/illustration-hero.svg";
import MusicIcon from "../assets/images/icon-music.svg";

const Card = () => {
  return (
    <section className="card_wrapper">
      <div className="card_image_wrapper">
        <img
          src={IllustrationHero}
          alt="Illustration Hero"
          className="illustration_hero"
        />
      </div>
      <div className="order_summary">
        <h1 className="order_summary_title">Order Summary</h1>
        <p className="order_description">
          You can now listen o millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="order_details">
          <div className="music_icon_wrapper">
            <img src={MusicIcon} alt="Music Icon" />
          </div>
          <div className="type_and_price">
            <p className="order_type">Annual Plan</p>
            <p className="order_price">$59.99/year</p>
          </div>
          <a href="#" className="change_link">
            Change
          </a>
        </div>
        <button className="process">Process to Payment</button>
        <button className="cancel_order">Cancel Order</button>
      </div>
    </section>
  );
};

export default Card;
