const getProdottoById = async (id) => {
    const response = await fetch(`api/prodotti/${id}`);
    return await response.json();
}
const getProdotti = async () => {
    const response = await fetch('api/prodotti');
    return await response.json();
}

const getUserById = async (username) => {
    const response = await fetch(`api/utenti/${username}`);
    return await response.json();
}

const getUserList = async () => {
    const response = await fetch('api/utenti');
    return await response.json();
}

const addUser = async (username, password, nome, cognome, email, citta, telefono, genere) => {
    const response = await fetch('api/utenti', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password, nome, cognome, email, citta, telefono, genere}),
    });

    return await response.json();
}

const updatePassword = async (password) => {
    const response = await fetch('api/utenti/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({password}),
    });
    return await response.json();
}

//roba aggiunta 

const addProduct = async (nome, prezzo, immagine, tendenza, descrizione, username) => {
    const response = await fetch('api/prodotti/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome, prezzo, immagine, tendenza, descrizione, username}),
    });
    return await response.json();
}

const changePassword = async (username, newPassword) => {
    const response = await fetch (`api/utenti/${username}/password`, {
        method: 'PUT',
        headers: {
             'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: newPassword })
    });
    
    if (!response.ok) {
        throw new Error('Errore nel cambio password');
    }

    return await response.json();
}


export {
    getProdottoById,
    getProdotti,
    getUserById,
    addProduct,
    changePassword,
    addUser,
    getUserList,
    updatePassword
};