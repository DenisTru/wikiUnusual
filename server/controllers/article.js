const Article = require('../../db/models/article.js');

exports.getAll = (req, res) => {
  // your code here;
  Article.find({}, (err, docs) => {
    res.send(docs);
  });
};

exports.saveFavorites = (req,res) => {

};
