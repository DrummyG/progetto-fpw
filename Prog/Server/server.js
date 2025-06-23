const express = require('express');
const prodottiRoutes = require('./src/prodotti/prodotti_routes');
const userRoutes = require('./src/utenti/utenti_routes');
const userRoutes = require('./src/sessions/session_routes');
const path = require('path');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use(express.json());
app.use('/prodotti', prodottiRoutes);
app.use('/utenti', userRoutes);
app.use('/sessions', sessionRoutes);
app.listen(port, () => console.log(`app listening on port ${port}!`));
app.use(express.static(path.join(__dirname, '../public')));


app.listen(3000, () => {
  console.log('Server backend su http://localhost:3000');
});
