// src/services/api/pizzaApi.js
import axios from "axios";

const API_URL = "http://localhost:8000"; //

export const getPizzas = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/pizzas/`);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des pizzas :", error);
        return [];
    }
};
