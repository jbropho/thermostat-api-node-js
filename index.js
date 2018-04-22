var express = require('express');
var app = express();
const https = require('https');
const PORT = process.env.PORT || 5000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/weather/:city', function(req, res) {
  let city = req.params.city
  https.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + process.env.WEATHER_KEY , (resp) => {
    let data = '';

    resp.on('data', (chunk) =>  data += chunk );

    resp.on('end', () => {
      res.send(JSON.parse(data));
    });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
