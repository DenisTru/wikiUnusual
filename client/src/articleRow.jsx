import React, { useState } from 'react';
import './styles/articleRow.scss';
import {HiOutlineExternalLink} from 'react-icons/hi';

function ArticleRow({ article, handleFav }) {
  const [expandText, toggleExpand] = useState(false);
  const [fav, setFav] = React.useState(true);

  return (
    <div className="article-rows-container">
      <div className="article-row">
        <button
          type="button"
          className={fav ? 'like-button' : 'like-button selected'}
          onClick={() => {
            setFav(!fav);
            handleFav(article);
          }}
        >
          <svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z" /></svg>
        </button>

        <a target="_blank" href={`https://www.wikipedia.org/wiki/${article[0]}`}>{article[0]}</a>
        <HiOutlineExternalLink className="external-link" />
        <br />
        <p onClick={() => { toggleExpand(!expandText); console.log(expandText); }} className={expandText ? 'active' : ''}>{article[1]}</p>
      </div>
    </div>
  );
}

export default ArticleRow;
