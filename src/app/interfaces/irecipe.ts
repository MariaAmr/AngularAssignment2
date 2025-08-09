export interface IRecipe {
  title: string;
  image_url: string;
  publisher: string;
}

export interface RecipeApiResponse {
  recipes: IRecipe[];
}