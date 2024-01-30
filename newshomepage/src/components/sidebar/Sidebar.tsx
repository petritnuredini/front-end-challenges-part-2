import React from "react";
import "./sidebar-style.css";
const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <h2 className="sidebar_title">New</h2>
      <div className="sidebar_news_container">
        <div className="sidebar_new_item">
          <h3 className="sidebar_new_item_title">Hydrogen VS Eletric Cars</h3>
          <p className="sidebar_new_item_description">
            Will hydroogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="sidebar_new_item">
          <h3 className="sidebar_new_item_title">
            The Downsides of AI Artistry
          </h3>
          <p className="sidebar_new_item_description">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="sidebar_new_item">
          <h3 className="sidebar_new_item_title">Is VC Funding Drying Up?</h3>
          <p className="sidebar_new_item_description">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
