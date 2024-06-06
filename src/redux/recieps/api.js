import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../apiService.js";
import { FAVOURITES, RECIPES } from "../../helpers/url.js";
import { HTTP_METHODS } from "../../constants.js";

export const TAGS = {
  RECIPES: "RECIPES",
};

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery,

  endpoints: (builder) => ({
    //getByCategory
    getRecipesByCategory: builder.query({
      query: (category) => ({
        url: `${RECIPES}/${category}`,

        providesTags: [TAGS.RECIPES],
      }),
    }),
    //getFavouriteRecipes
    getFavouriteRecipes: builder.query({
      query: () => ({
        //
        url: `${RECIPES}/${FAVOURITES}/all`,
        providesTags: [TAGS.RECIPES],
      }),
    }),
    //create Favourite Recipe
    createFavouriteRecipe: builder.mutation({
      query: (mealId) => ({
        url: `${RECIPES}/${FAVOURITES}/create`,
        method: HTTP_METHODS.POST,
        body: mealId,
        providesTags: [TAGS.RECIPES],
      }),
    }),
  }),
});
export const {
  useGetRecipesByCategoryQuery,
  useGetFavouriteRecipesQuery,
  useCreateFavouriteRecipeMutation,
} = recipesApi;
