const getProdottoById = async (id) => {
    const response = await fetch(`api/prodotti/${id}`);
    return await response.json();
}
const getProdotti = async () => {
    const response = await fetch('api/prodotti');
    return await response.json();
}
export {
    getProdottoById,
    getProdotti
};