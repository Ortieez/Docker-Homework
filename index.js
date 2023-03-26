const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!. This is response from docker container made by Adam ortieez Lipert');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
