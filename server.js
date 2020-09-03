
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.json({"ipaddress": req.header('x-forwarded-for'),
            "language":  req.header('Accept-Language'),
            "software":  req.header('User-Agent') });
  // console.log(req.header('User-Agent'))
  // console.log(req.header('x-forwarded-for'))
  // console.log(req.header('Accept-Language'))
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
