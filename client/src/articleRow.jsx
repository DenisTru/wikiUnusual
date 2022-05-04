import React, {useState} from 'react';
import './styles/articleRow.scss';

let mockRow = [{name: 'Mawson Peak', description: 'Mawson Peak is an active volcanic summit of the Big Ben massif on Heard Island, an external Australian territory in the Indian Ocean. \nWith an elevation of 2,745 metres (9,006 ft), it is the third highest peak in any state or territory of Australia, higher than the 2,228-metre (7,310 ft) Mount Kosciuszko, and surpassed only by the 3,490-metre (11,450 ft) Mount McClintock and the 3,355-metre (11,007 ft) Mount Menzies claimed in the Australian Antarctic Territory. The peak erupted as recently as April 2013 and February 2016.',url:"https://en.wikipedia.org/wiki/Mawson_Peak"}]

function ArticleRow(props) {

  const [expandText, toggleExpand] = useState(false);

  return(
  <div className='article-rows-container'>
{mockRow.map((row) => {
  return(
    <div className='article-row'>
<a href={row.url}>{row.name}</a> <br/> <p onClick={() => {toggleExpand(!expandText); console.log(expandText)}}className={expandText ? "active": "" }>{row.description}</p>
    </div>
  )
})}
  </div>
  )
}

export default ArticleRow;