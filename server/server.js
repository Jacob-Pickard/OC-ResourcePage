const express = require('express');
const cors = require('cors'); 
const { scrapeEvents } = require('./scraper');

const app = express();
const PORT = 80;

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/api/events', async (req, res) => {
  const events = await scrapeEvents();
  console.log('Scraped Events:', events);
  res.json(events);
});

app.get('/', (req, res) => {
  res.send('Hello, World! The server is up and running.');
});

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  }
});
