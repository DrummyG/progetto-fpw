
//get
const getProdotti = `
  SELECT prodotti.*, utenti.username
  FROM prodotti
  JOIN utenti ON prodotti.id_proprietario = utenti.id
  ORDER BY prodotti.id ASC `;
const getProdottoById = `
  SELECT prodotti.*, utenti.username
  FROM prodotti
  JOIN utenti ON prodotti.id_proprietario = utenti.id
  WHERE prodotti.id = $1 `;
//post
const addProdotto = "INSERT INTO prodotti (id, nome, prezzo, img, trend, descrizione, id_proprietario) VALUES ($1, $2, $3, $4, $5, $6, $7)";
//delete
const deleteProdotto = "DELETE FROM prodotti WHERE id = $1";
//update
const updateProdotto = "UPDATE prodotti SET nome = $2, prezzo = $3, img = $4, trend = $5, descrizione = $6, id_proprietario = $7,  WHERE id = $1";


module.exports = {
    getProdotti,
    getProdottoById,
    addProdotto,
    deleteProdotto,
    updateProdotto
};
