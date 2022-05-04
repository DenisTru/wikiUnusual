const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const vc = require('./controllers/article.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/public'));

app.get('/articles', vc.getAll);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
