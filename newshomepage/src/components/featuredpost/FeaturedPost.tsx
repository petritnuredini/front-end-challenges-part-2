import React from "react";
import "./freatured-post-style.css";
import FeaturedImageDesktop from "../../assets/images/image-web-3-desktop.jpg";
import FeaturedImageMobile from "../../assets/images/image-web-3-mobile.jpg";

const FeaturedPost = () => {
  return (
    <div className="featured_post_container">
      <div className="featured_post_image_container">
        <img
          src={FeaturedImageDesktop}
          alt="Featured image"
          className="featured_image_desktop"
        />
        <img
          src={FeaturedImageMobile}
          alt="Featured image"
          className="featured_image_mobile"
        />
      </div>
      <div className="featured_post_details">
        <h1 className="featured_post_title">The Bright Future of Web 3.0?</h1>
        <div className="featured_post_description">
          <p className="featured_post_desc_text">
            We dive into the next evolution of the web that claims to put the
            power of platform back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="read_more_button">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
