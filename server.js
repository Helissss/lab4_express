import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Witaj w aplikacji internetowej!');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});