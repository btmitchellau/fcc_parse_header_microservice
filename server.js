const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  optionSuccessStatus: 200
}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({
    ipaddress: req.header('x-forwarded-for'),
    language: req.header('Accept-Language'),
    software: req.header('User-Agent'),
  });
});

app.listen(process.env.PORT);