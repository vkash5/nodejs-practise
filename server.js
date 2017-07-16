const express = require('express');
const app = express();
const fs = require('fs');
process.env.PORT=4000;
let data = { first_name: 'ved', last_name: 'prakash'}
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html',function (err){});
})
app.get('/fs1', function (req, res) {
  fs.readFile('index.html',(err,buffer)=>{
      var html = buffer.toString();
      res.setHeader('Content-type','text/html');
      res.send(html);
  });
})
app.get('/data1', function (req, res) {
  res.sendFile(__dirname+'/data.json',function (err){});
})
app.get('/index.css', function (req, res) {
  res.sendFile(__dirname+'/index.css');
})
app.get('/data2', function (req, res) {
  res.json(data);
})
app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!'+app.get('port'))
})