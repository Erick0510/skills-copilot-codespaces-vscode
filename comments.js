// Create web server
// Run with: node comments.js
// Then visit: http://localhost:3000/

var express = require('express');
var app = express();

var comments = [];

app.get('/', function(req, res) {
  res.send('<h1>Comments</h1>' +
    '<form method="post" action="/">' +
    '<p><input type="text" name="comment" placeholder="Comment" /></p>' +
    '<p><input type="text" name="name" placeholder="Name" /></p>' +
    '<p><input type="submit" value="Submit" /></p>' +
    '</form>' +
    '<ul>' +
    comments.map(function(comment) {
      return '<li>' + comment.name + ': ' + comment.comment + '</li>';
    }).join('') +
    '</ul>'
  );
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res) {
  comments.push({
    name: req.body.name,
    comment: req.body.comment
  });
  res.redirect('/');
});

app.listen(3000);
console.log('Server is running on http://localhost:3000/');