const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(3000, () => console.log(`Server running on port ${PORT}`));
