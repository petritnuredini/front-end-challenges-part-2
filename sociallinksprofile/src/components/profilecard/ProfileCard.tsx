import React from "react";
import "./profile-card-style.css";
import SocialMediaButton from "../socialmediabutton/SocialMediaButton";
import ProfileImage from "../../assets/assets/images/petritnuredini.jpeg";

const ProfileCard = () => {
  return (
    <article className="profile_card">
      <div className="profile_image_wrapper">
        <img
          src={ProfileImage}
          alt="Petrit Nuredini's image"
          className="profile_image"
        />
      </div>

      <h1 className="profile_name">Petrit Nuredini</h1>
      <p className="profile_address">Pristina, Kosovo</p>
      <p className="profile_motto">"Mid or feed"</p>

      <section className="social_media_buttons_wrapper">
        <SocialMediaButton
          text="Github"
          link="https://www.github.com/petritnuredini"
        />
        <SocialMediaButton
          text="Frontend Mentor"
          link="https://www.frontendmentor.io/profile/petritnuredini"
        />
        <SocialMediaButton
          text="LinkedIn"
          link="https://www.linkedin.com/in/petritnuredini/"
        />
        <SocialMediaButton
          text="Twitter"
          link="https://www.twitter.com/pnuredini"
        />
        <SocialMediaButton
          text="Facebook"
          link="https://www.facebook.com/pnuredini"
        />
      </section>
    </article>
  );
};

export default ProfileCard;
