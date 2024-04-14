import { IDrink } from "../models/response";

export const extractIngredients = (data: IDrink) => {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = data[`strIngredient${i}` as keyof IDrink];
    const measure = data[`strMeasure${i}` as keyof IDrink];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
}
