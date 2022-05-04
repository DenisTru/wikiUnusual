import React from 'react';
import './styles/categories.scss';
let mockCategories = ["Places","Mathmatics","History",'langauge','science','technology,invetion and products','pop culture']

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
  let shuffledCategories =
  mockCategories
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  return (
    <div className='categories-container'>
      <h4>Categories</h4>
      {shuffledCategories.map((category) => {
        return <button> {category} </button>
      })}
    </div>
  )
}
}

export default Categories;