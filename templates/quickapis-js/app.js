const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World 2023!');
});


app.listen(3000, () => {
    console.log('app listening on port 3000!');
});