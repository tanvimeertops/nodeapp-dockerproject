const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to My App by Tanvi Meer');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
