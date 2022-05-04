import { createRoot } from 'react-dom/client';
import React from 'react';
import axios from 'axios';

import './styles/index.scss';
import Categories from './categories.jsx';
import ArticleRow from './articles.jsx';

const root = createRoot(document.getElementById('root'));
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      chosenArticle: [],
    };
  }

  componentDidMount() {
    axios.get('/articles')
      .then((docs) => {
        const articles = Object.entries(docs.data[0]).slice(1);
        this.setState({
          articles,
        });
      });
  }

  handleArticleClick = (list) => {
    this.setState({
      chosenArticle: list,
    });
  };

  render() {
    const { articles, chosenArticle } = this.state;
    return (
      <div className="main-container">
        <h2>Unusual Things</h2>
        <Categories articles={articles} handleArticleClick={this.handleArticleClick} />
        <ArticleRow chosenArticle={chosenArticle} />
      </div>
    );
  }
}

root.render(<App />);
