import React, { useState, useEffect } from "react";
import { stories } from "../data";
import Article from "./Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/articles");
      const data = await response.json();
      setArticles(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, [articles]);

  return (
    <div className="article-container">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
