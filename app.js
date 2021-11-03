require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());


app.get('/echo', (req, res) => {
  const { method, url, protocol, rawHeaders } = req;
  res.status(200).send({
    method,
    url,
    protocol,
    rawHeaders: JSON.stringify(rawHeaders)
  });
});

app.get('/ip', (req, res) => {
  res.json({
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
  })
});

app.listen(process.env.PORT, () => {
  console.log('Server runs on ' + process.env.PORT);
})