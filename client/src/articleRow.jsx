import React, { useState } from 'react';
import './styles/articleRow.scss';

function ArticleRow({ article , handleSave}) {
  const [expandText, toggleExpand] = useState(false);
  const [fav, setFav] = React.useState(false);

  return (
    <div className="article-rows-container">
      <div className="article-row">
        <a href={`https://www.wikipedia.org/wiki/${article[0]}`}>{article[0]}</a>
        <br />
        <p onClick={() => { toggleExpand(!expandText); console.log(expandText); }} className={expandText ? 'active' : ''}>{article[1]}</p>
      </div>
    </div>
  );
}

export default ArticleRow;
