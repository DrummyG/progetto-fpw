
//get
const getUsers= "SELECT * FROM utenti ORDER BY username ASC";
const getUserById = "SELECT * FROM utenti WHERE username = $1";
//post
const addUser = "INSERT INTO utenti (username, password, nome, cognome, email, citta,telefono) VALUES ($1, $2, $3, $4, $5, $6, $7)";
//delete
const deleteUser = "DELETE FROM utenti WHERE username = $1";
//update
const updateUser = "UPDATE utenti SET password = $2, nome = $3, cognome = $4, email = $5, citta = $6, telefono = $7 WHERE username = $1";

const updatePassword = "UPDATE utenti SET password = $2 WHERE username = $1";


module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    updatePassword
};
