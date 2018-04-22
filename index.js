var express = require('express')
var app = express()
const PORT = process.env.PORT || 5000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
