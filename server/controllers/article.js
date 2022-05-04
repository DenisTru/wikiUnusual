const Article = require('../../db/models/article.js');

exports.getAll = (req, res) => {
  // your code here;
  Article.find({},function (err, docs) {
    res.send(docs);
  })
};