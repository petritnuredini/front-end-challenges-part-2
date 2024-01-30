import React, { useState } from "react";
import "./home-style.css";
import FeaturedPost from "../../components/featuredpost/FeaturedPost";
import Sidebar from "../../components/sidebar/Sidebar";
import NewsItem from "../../components/newsitem/NewsItem";
import NewsOneImage from "../../assets/images/image-retro-pcs.jpg";
import NewsTwoImage from "../../assets/images/image-top-laptops.jpg";
import NewsThreeImage from "../../assets/images/image-gaming-growth.jpg";
import { NewsItemProps } from "../../types/types";

const Home = () => {
  const [news, setNews] = useState<NewsItemProps[]>([
    {
      image: NewsOneImage,
      itemNumber: "01",
      itemTitle: "Reviving Retro PCs",
      itemDescription: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: NewsTwoImage,
      itemNumber: "02",
      itemTitle: "Top 10 Laptopts of 2022",
      itemDescription: "Our best picks for various needs and budgets.",
    },
    {
      image: NewsThreeImage,
      itemNumber: "03",
      itemTitle: "The Growth of Gaming",
      itemDescription: "How the pandemic has sparked fresh opportunities.",
    },
  ]);

  return (
    <div className="home_screen_container">
      <div className="home_first_section">
        <FeaturedPost />
        <Sidebar />
      </div>
      <div className="news_items_container">
        {news.length > 0 &&
          news.map((newsItem: NewsItemProps) => (
            <NewsItem
              image={newsItem.image}
              itemNumber={newsItem.itemNumber}
              itemTitle={newsItem.itemTitle}
              itemDescription={newsItem.itemDescription}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
