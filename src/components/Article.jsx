import React from "react";

const Article = ({ article }) => {
  return (
    <a href="">
      <div class="article">
        <img src={article.image} alt={article.title} class="article-image" />
        <div class="article-content">
          <h2 class="article-title">{article.title}</h2>
          <p class="article-details">{article.details}</p>
          <p class="article-date">Published: {article.createdAt}</p>
        </div>
      </div>
    </a>
  );
};

export default Article;
