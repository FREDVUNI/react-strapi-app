import React from "react";

const Article = ({ article }) => {
  return (
    <a href="">
      <div className="article">
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
        />
        <div className="article-content">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-details">{article.details}</p>
          <small className="article-date">
            Published: {new Date(article.createdAt).toDateString()}
          </small>
        </div>
      </div>
    </a>
  );
};

export default Article;
