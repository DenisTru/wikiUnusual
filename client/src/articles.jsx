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
  const randomArticle = chosenArticle[1] ? chosenArticle[1][(getRandomInt(0, chosenArticle[1].length - 1))] : [];
  console.log(randomArticle);
  return (
    <div className="articles-container">
      <h4>
        Random Article from:
        {' '}
        {chosenArticle[0]}
      </h4>
      {chosenArticle[1] ? <ArticleRow article={randomArticle} /> : []}
    </div>
  );
}

export default Articles;
