const pool = require('../../db');
const queries = require('./utenti_queries');

const getUserList = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const getUserById = (req, res) => {
    const username = parseInt(req.params.username);
    pool.query(queries.getUserById, [username], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addUser = (req, res) => {
    const { username, password, nome, cognome, email, citta} = req.body;

    pool.query(queries.getUserById, [username], (error, results) => {
        if(error) throw error;
        if(results.rows.length >0) {
            res.status(400).send("L'utente esiste già nel database");
        }else{
            pool.query(queries.addUser, [username, password, nome, cognome, email, citta], (error) => {
                if (error) throw error;
                res.status(201).send("Utente aggiunto correttamente");
            });
        }
    },);
}


const deleteUser = (req, res) => {
    const username = parseInt(req.params.username);
    pool.query(queries.deleteUser, [username], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send("Utente non trovato");
        }else{
            res.status(200).send("Utente eliminato correttamente");
        }
    });
}


const updateUser = (req, res) => {
    const { username, password, nome, cognome, email, citta } = req.body;

    pool.query(queries.updateUser, [username, password, nome, cognome, email, citta], (error,results) => {
        if (error) {
            console.error('--- ERRORE QUERY UPDATE User ---');
            console.error('Testo query:', queries.updateUser);
            console.error('Parametri:', [username, password, nome, cognome, email, citta]);
            console.error('Messaggio errore:', error.message);
            console.error('Position (char offset):', error.position);
            return res.status(500).json({ error: error.message });
          };     
        if (results.rowCount === 0) {
            res.status(404).send("Utente non trovato");
        }
        res.status(200).send("Utente aggiornato correttamente");
    });
}

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};



module.exports = {
    getUserList,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    getUsers,
};