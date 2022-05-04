import React from 'react';
import ArticleRow from './articleRow.jsx';
import './styles/articles.scss';
import './styles/categories.scss';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function Articles({ chosenArticle }) {
  const randomArticles = chosenArticle[1] ? chosenArticle[1].map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 5) : [];

  // const randomArticle = chosenArticle[1] ? chosenArticle[1][(getRandomInt(0, chosenArticle[1].length - 1))] : [];
  return (
    <div className="articles-container">
      <h4>
        Random Articles from:
        {' '}
        {chosenArticle[0]}
      </h4>
      {randomArticles ? randomArticles.map((article) => <ArticleRow article={article} />) : []}
    </div>
  );
}

export default Articles;
