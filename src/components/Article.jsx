import React from "react";

const Article = ({ article }) => {
  return (
    <a href="">
      <div class="article">
        <img src={article.image} alt={article.title} class="article-image" />
        <div class="article-content">
          <h2 class="article-title">{article.title}</h2>
          <p class="article-details">{article.details}</p>
          <small class="article-date">Published: {new Date(article.createdAt).toDateString()}</small>
        </div>
      </div>
    </a>
  );
};

export default Article;
