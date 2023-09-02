import React from "react";
import { stories } from "../data";
import Article from "./Article";

const Articles = () => {
  return (
    <div className="article-container">
      {stories.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
