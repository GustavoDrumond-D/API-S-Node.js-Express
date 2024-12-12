import axios from "axios"

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

async function getFavoritos() {
    try {
        const response = await favoritosAPI.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
        throw error;
    }
}

async function postFavoritos(id) {
    try {
        await favoritosAPI.post(`/${id}`);
    } catch (error) {
        console.error("Erro ao adicionar favorito:", error);
        throw error;
    }
}

async function deleteFavoritos(id) {
    try {
        await favoritosAPI.delete(`/${id}`);
    } catch (error) {
        console.error("Erro ao deletar favorito:", error);
        throw error;
    }
}

export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}
