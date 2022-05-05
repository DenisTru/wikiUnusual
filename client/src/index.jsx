import { createRoot } from 'react-dom/client';
import React from 'react';
import axios from 'axios';
import {
  GiFlowerPot, GiButterflyFlower, GiFireFlower, GiFlowerHat, GiFlowerEmblem,
} from 'react-icons/gi';

import './styles/index.scss';
import Categories from './categories.jsx';
import Articles from './articles.jsx';

const root = createRoot(document.getElementById('root'));
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      chosenArticle: [],
      favArticles: [],
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

  handleFav = (article) => {
    const { favArticles } = this.state;

    // bool to check if item is in list
    const checkFav = function () {
      return favArticles.some(
        (r) => r.length === article.length
               && r.every((value, index) => article[index] === value),
      );
    };

    // if not in list push it
    if (!checkFav()) {
      return favArticles.push(article);
    }
    const index = favArticles.indexOf(article);
    return favArticles.splice(index, 1);
    // TODO: make a tab with articleRow component but with filtered items
  };

  render() {
    const { articles, chosenArticle, favArticles } = this.state;
    return (
      <div className="main-container">
        <div className="title">

          <h2>
            <GiFlowerEmblem />
            {' '}
            <GiFlowerHat className="icon" />
            {' '}
            Unusual Things
            {' '}
            <GiButterflyFlower />
            <GiFireFlower />
          </h2>
        </div>
        <Categories articles={articles} handleArticleClick={this.handleArticleClick} />
        <br />
        <Articles chosenArticle={chosenArticle} handleFav={this.handleFav} favArticles={favArticles} />
      </div>
    );
  }
}

root.render(<App />);
