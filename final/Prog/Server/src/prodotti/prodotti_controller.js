const pool = require('../../db');
const queries = require('./prodotti_queries');

const getProdottiList = (req, res) => {
   pool.query(queries.getProdotti, (error, results) => {
        if (error) {
            console.error('Errore in getProdottiList:', error.message);
            return res.status(500).send("Errore nel recupero dei prodotti");
        }
        res.status(200).json(results.rows);
    });
}

const getProdottoById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProdottoById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addProduct = (req, res) => {
    const { id, nome, prezzo, img, trend, descrizione, username} = req.body;
    console.log(id)
    pool.query(queries.getProdottoById, [id], (error, results) => {
        if(error) throw error;
        if(results.rows.length >0) {
            res.status(400).send("Il Brainrot esiste già nel database");
        }else{
            console.log("faccio la richiesta")
            console.log(id)

            pool.query(queries.addProduct, [nome, prezzo, img, trend, descrizione, username], (error) => {
                if (error) throw error;
                res.status(201).send("Brainrot aggiunto correttamente")
            });
        }
    },);
}


const deleteProdotto = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteProdotto, [id], (error, results) => {
        if (error) throw error;
        if (results.rowCount === 0) {
            res.status(404).send("Brainrot non trovato");
        }else{
            res.status(200).send("Brainrot eliminato correttamente");
        }
    });
}


const updateProdotto = (req, res) => {
    const { id, nome, prezzo, img, trend, descrizione, username} = req.body;

    pool.query(queries.getProdottoById, [id], (error, results) => {
        if (error) {
            console.error('--- ERRORE QUERY UPDATE Brainrot ---');
            console.error('Testo query:', queries.updateProdotto);
            console.error('Parametri:', [id, nome, prezzo, img, trend, descrizione, username]);
            console.error('Messaggio errore:', error.message);
            console.error('Position (char offset):', error.position);
            return res.status(500).json({ error: error.message });
          };     
        if (results.rowCount === 0) {
            res.status(404).send("Brainrot non trovato");
        } else {
            pool.query(queries.updateProdotto, [id, nome, prezzo, img, trend, descrizione, username], (error) => {
            if (error) throw error;
            res.status(201).send("Brainrot aggiornato correttamente");
            })
        }
    });
}



module.exports = {
    getProdottiList,
    getProdottoById,
    addProduct,
    deleteProdotto,
    updateProdotto
};