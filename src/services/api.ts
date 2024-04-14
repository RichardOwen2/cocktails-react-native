import axios from "axios";
import { API_URL } from "../constants";
import { IDrink } from "../models/response";

export const searchCocktail = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/search.php?s=${query}`);
    return response.data.drinks as IDrink[];
  } catch (error: any) {
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Error fetching data');
    }
  }
}

export const getDrinkById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
    return response.data.drinks[0] as IDrink;
  } catch (error: any) {
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Error fetching data');
    }
  }
}