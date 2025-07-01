const pool = require('../../db');
const queries = require('./session_queries');

/* Controllo credenziali iniziale 

const login = (req, res) => {
    const {username, password} = req.body
    console.log("1: " + username + " " + password)

    pool.query(queries.login, [username, password], (error, results) => {
        console.log("2")
        if(error) throw error
        console.log("3: " + results.rows.length)
        if(results.rows.length > 0){
            console.log(req.session)
            console.log(results.rows[0].username)
            req.session.userId = results.rows[0].username
            
            res.status(200).json(req.session)
        }else{
            console.log("5")
            res.status(401).json({message: 'username o passwordword errati'})
        }
    })
}

*/

const logout = (req, res) => {
    if(req.session.userId){
        req.session.destroy()
        res.status(200).json({message: 'Logout effettuato'})
    }else{
        res.status(401).json({message:'Non sei loggato'})
    }
}

const isLogged = (req, res) => {
    if(req.session.userId){
        res.status(200).json(req.session)
    }else{
        res.status(401).json({message: 'Non sei loggato'})
    }
}



const utenteQueries = require('../utenti/utenti_queries');


// Controllo credenziali con controlo di password errata, utente non registrato.

const login = (req, res) => {
    const {username, password} = req.body;

    pool.query(queries.login, [username, password], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            req.session.userId = results.rows[0].username;
            res.status(200).json(req.session);
        } else {
            pool.query(utenteQueries.getUserById, [username], (error, results) => {
              if (error) throw error;
              if(results.rows.length > 0) {
                res.status(401).json({message: "password errata"});

              } else {
                 res.status(401).json({message: "Utente non registrato"});
              }
            });
        }
    });
}

module.exports = {
    login,
    logout,
    isLogged,
}