const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/dist/chuckfrontapi'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/chuckfrontapi/index.html'));
});

app.listen(process.env.PORT || 4000);