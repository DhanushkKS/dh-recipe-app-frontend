import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      //
      state.push(action.payload);
    },
  },
});
export const { setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
