'use strict';

const express = require ('express');

const app = express();
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname +  '/public/index.html')
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
