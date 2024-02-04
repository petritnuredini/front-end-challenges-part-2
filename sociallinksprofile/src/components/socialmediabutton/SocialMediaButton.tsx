import React from "react";
import "./social-media-button-style.css";

interface SocialMediaButtons {
  text: string;
  link: string;
}

const SocialMediaButton = ({ text, link }: SocialMediaButtons) => {
  return (
    <a href={link} target="__blank" className="social_media_button">
      {text}
    </a>
  );
};

export default SocialMediaButton;
