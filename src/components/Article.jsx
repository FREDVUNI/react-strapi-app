import React from "react";

const Article = ({ article }) => {
  const imageURL = "http://localhost:1337/";
  return (
    <a href="">
      <div className="article">
        <img
          src={`${imageURL}`}
          alt={article.attributes.title}
          className="article-image"
        />
        <div className="article-content">
          <h2 className="article-title">{article.attributes.title}</h2>
          <p className="article-details">{article.attributes.content}</p>
          <small className="article-date">
            Published: {new Date(article.attributes.date).toDateString()}
          </small>
        </div>
      </div>
    </a>
  );
};

export default Article;
