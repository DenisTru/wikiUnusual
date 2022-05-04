import { createRoot } from 'react-dom/client';
import React from 'react';
import './styles/index.scss';
import Categories from './categories.jsx';
import ArticleRow from './articles.jsx';

const root = createRoot(document.getElementById('root'));
console.log()
function App() {
  return (
    <div className="main-container">
      <h2>Unusual Things</h2>
      <Categories />
      <ArticleRow />
    </div>
  );
}

root.render(<App />);
