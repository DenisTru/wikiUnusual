import React from 'react';
import ArticleRow from './articleRow.jsx';
import './styles/articles.scss';
import './styles/categories.scss';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Articles({ chosenArticle, handleFav }) {
  const randomArticles = chosenArticle[1] ? chosenArticle[1].map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 5) : [];

  return (
    <div className="articles-container">
      <h4>
        Random Articles from:
        {' '}
        {chosenArticle[0]}
      </h4>
      {randomArticles ? randomArticles.map((article) => <ArticleRow article={article} handleFav={handleFav} key={article[0]}/>) : []}
    </div>
  );
}

export default Articles;
