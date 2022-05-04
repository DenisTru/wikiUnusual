import React from 'react';
import ArticleRow from './articleRow.jsx';
import './styles/articles.scss';

class Articles extends React.Component {
constructor(props) {
  super(props);
}

componentDidMount() {
  fetch(
    "https://en.wikipedia.org/w/api.php?action=parse&prop=sections&page=Wikipedia%3AUnusual_articles&format=json&origin=*",
    {
      method: "GET"
    }
  )
    .then(response => response.json())
    .then(json => {
      let sections = json.parse.sections;
      fetch('https://www.wikitable2json.com/api/Wikipedia%3AUnusual_articles?lang=en&cleanRef=false')
      .then(data => {
        return data.json()
      })
      .then(data1=> {
        let dataObject = {}
        sections.map((section,index) => {
          if(data1[index]) {
            dataObject[section.anchor] = data1[index];
          }
        })
        console.log(dataObject);
      })
    })
    .catch(error => {
      console.log(error.message);
    });
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