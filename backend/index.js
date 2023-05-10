const connectToMongo = require("./db");
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();

const port = 9000;

app.use(express.json());
app.use(cors()); // Add CORS support

app.get('/', (req, res) => {
  res.send('Hello utsav!');
});
app.use('/api/auth', require('./routes/weather'));
// require('./routes/subgred')
// app.use('/api/subgreddit')
app.listen(port, () => {
  console.log(`My backend listening on port ${port}`);
});
