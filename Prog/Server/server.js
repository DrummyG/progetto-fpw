const express = require('express');
const session = require('express-session');
const prodottiRoutes = require('./src/prodotti/prodotti_routes');
const userRoutes = require('./src/utenti/utenti_routes');
const sessionRoutes = require('./src/sessions/session_routes');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000, secure: false }
}))

app.use('/prodotti', prodottiRoutes);
app.use('/utenti', userRoutes);
app.use('/sessions', sessionRoutes);
app.listen(port, () => console.log(`app listening on port ${port}!`));
app.use(express.static(path.join(__dirname, '../public')));
