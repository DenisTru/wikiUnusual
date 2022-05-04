import React from 'react';

function Categories({ articles, handleArticleClick }) {
  const shuffledCategories = articles
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, 5);

  return (
    <div className="categories-container">
      <h4>Categories</h4>
      {shuffledCategories.map((category) => (
        <button type="button" className="category-button" onClick={() => handleArticleClick(category)}>
          {category[0]}
        </button>
      ))}
    </div>
  );
}

export default Categories;
