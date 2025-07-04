const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/players', (req, res) => {
  // Return a list of players
  res.json([
    { id: 1, name: 'Babar Azam' },
    { id: 2, name: 'Fakhar Zaman' },
    { id: 3, name: 'Mohammad Rizwan' },
  ]);
});

app.get('/api/schedule', (req, res) => {
  // Return a list of schedule
  res.json([
    { id: 1, date: '2023-02-10', team1: 'Pakistan', team2: 'Australia' },
    { id: 2, date: '2023-02-12', team1: 'Pakistan', team2: 'England' },
    { id: 3, date: '2023-02-15', team1: 'Pakistan', team2: 'New Zealand' },
  ]);
});

app.get('/api/news', (req, res) => {
  // Return a list of news articles
  res.json([
    { id: 1, title: 'Pakistan wins against Australia' },
    { id: 2, title: 'England defeats Pakistan in second match' },
    { id: 3, title: 'Pakistan beats New Zealand in thrilling match' },
  ]);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```
**Database (JSON files)**