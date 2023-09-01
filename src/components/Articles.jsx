import React from "react";

const Articles = () => {
  return (
    <div class="article-container">
      <div class="article">
        <img src="soccer.jpg" alt="Soccer Image" class="article-image" />
        <div class="article-content">
          <h2 class="article-title">Exciting Soccer Match</h2>
          <p class="article-details">
            In a thrilling match, the home team secured victory with a
            last-minute goal.
          </p>
          <p class="article-date">Published: 2023-08-25</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
