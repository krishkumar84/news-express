// const express = require('express');
// const fetch = require('node-fetch');

// const app = express();
// const port = 3000;

// const API_KEY = "ebf4960f19e946719e8c5348d47e4842";
// const url = "https://newsapi.org/v2/everything?q=";

// app.use(express.static('public'));

// app.get('/news', async (req, res) => {
//   const query = req.query.q;
//   const apiUrl = `${url}${query}&apiKey=${API_KEY}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     res.json(data.articles);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const apiUrl = 'https://newsapi.org/v2/everything?q=';

app.use(express.static('public'));

app.get('/api/news/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const url = `${apiUrl}${query}&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


