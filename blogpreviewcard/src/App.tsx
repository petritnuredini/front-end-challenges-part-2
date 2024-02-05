import React from "react";
import "./App.css";
import ImageBlog from "./assets/images/illustration-article.svg";
import ImageAvatar from "./assets/images/image-avatar.webp";

function App() {
  return (
    <main className="app_container">
      <article className="card_wrapper">
        <div className="image_container">
          <img src={ImageBlog} alt="Blog Image" className="blog_image" />
        </div>
        <button className="learning_category">Learning</button>

        <p className="published_date">Published 21 Dec 2023</p>
        <h1 className="blog_post_title">HTML & CSS foundations</h1>
        <p className="blog_description">
          These languages are the backbone of every website, defining structure,
          content, and presantation.
        </p>

        <div className="profile_wrapper">
          <div className="avatar_container">
            <img
              src={ImageAvatar}
              alt="Profile Avatar"
              className="profile_avatar_img"
            />
          </div>
          <h2 className="profile_user_name">Greg Hooper</h2>
        </div>
      </article>
    </main>
  );
}

export default App;
