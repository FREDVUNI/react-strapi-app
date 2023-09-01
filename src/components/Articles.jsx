import React from "react";

const Articles = () => {
  return (
    <div class="article-container">
      <a href="">
        <div class="article">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/725XwMfBbE8pTlx5k2232Q/3780839851ff54ca71d5d9d0e45e9a58/03-beauty-fashion_1781009285.jpg?fit=fill&w=840&h=473&fm=webp"
            alt="Soccer Image"
            class="article-image"
          />
          <div class="article-content">
            <h2 class="article-title">Exciting Soccer Match</h2>
            <p class="article-details">
              In a thrilling match, the home team secured victory with a
              last-minute goal.
            </p>
            <p class="article-date">Published: 2023-08-25</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Articles;
