const express = require('express');
const path = require('path');
const app = express();

var count = 0;

console.log(__dirname);
app.use(express.static(__dirname + '/dist/chuckfrontapi'));

app.get('/*', function (req, res) {
  count++;
  console.log('somebody get a joke :) - number of jokes get: '+count);
  res.sendFile(path.join(__dirname + '/dist/chuckfrontapi/index.html'));
});

app.listen(process.env.PORT || 4000);
