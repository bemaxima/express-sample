require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());


app.get('/foo', (req, res) => {
  res.json({
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
  })
});

app.post('/foo', (req, res) => {
  res.json({
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
  })
});

app.listen(process.env.PORT, () => {
  console.log('Server runs on ' + process.env.PORT);
})