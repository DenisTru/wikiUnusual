import React from 'react';
import ArticleRow from './articleRow.jsx';
import './styles/articles.scss';

class Articles extends React.Component {
constructor(props) {
  super(props);
}

render(){
  return(
    <div className='articles-container'><h4>Article List</h4>
    <ArticleRow/>
    </div>
  )
}
}

export default Articles;