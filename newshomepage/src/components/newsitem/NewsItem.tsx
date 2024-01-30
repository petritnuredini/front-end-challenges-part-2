import React from "react";
import "./news-item-style.css";
import { NewsItemProps } from "../../types/types";

const NewsItem = ({
  image,
  itemNumber,
  itemTitle,
  itemDescription,
}: NewsItemProps) => {
  return (
    <div className="news_item_wrapper">
      <div className="news_item_image_container">
        <img src={image} alt="News Item Image" className="news_item_image" />
      </div>
      <div className="news_item_details">
        <h3 className="news_item_number">{itemNumber}</h3>
        <h4 className="news_item_title">{itemTitle}</h4>
        <p className="news_item_description">{itemDescription}</p>
      </div>
    </div>
  );
};

export default NewsItem;
