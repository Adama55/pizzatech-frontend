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

export const createPizza = async (pizzaData) => {
    try {
        const response = await axios.post(`${API_URL}/api/pizzas/`, pizzaData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création de la pizza :", error);
        throw error;
    }
};
