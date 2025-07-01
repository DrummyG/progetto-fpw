
//get
const getProdotti = `
  SELECT prodotti.*, utenti.username
  FROM prodotti
  JOIN utenti ON prodotti.username = utenti.username
  ORDER BY prodotti.id ASC `;
const getProdottoById = `
  SELECT prodotti.*, utenti.username
  FROM prodotti
  JOIN utenti ON prodotti.username = utenti.username
  WHERE prodotti.id = $1 `;
//post
const addProduct = "INSERT INTO prodotti ( nome, prezzo, img, trend, descrizione, username) VALUES ($1, $2, $3, $4, $5, $6)";
//delete
const deleteProdotto = "DELETE FROM prodotti WHERE id = $1";
//update
const updateProdotto = "UPDATE prodotti SET nome = $2, prezzo = $3, img = $4, trend = $5, descrizione = $6, username = $7,  WHERE id = $1";


module.exports = {
    getProdotti,
    getProdottoById,
    addProduct,
    deleteProdotto,
    updateProdotto
};
