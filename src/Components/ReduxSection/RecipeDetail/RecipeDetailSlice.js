import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RecipeApi } from "../../BackendApi/RecipeApi";
const initialState = {
  searchRecipe: "",
  RecipeData: [
    {
      id: nanoid(),
      image: "",
      label: "",
    },
  ],
  loading: false,
  error: null,
  success: false,
};

const RecipeDetailSlice = createSlice({
  name: "Recipe",
  initialState,

  reducers: {
    searchRecipe: (state, action) => {
      state.searchRecipe = action.payload;
    },
  },

  extraReducers: {
    [RecipeApi.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [RecipeApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.RecipeData = payload;
    },

    [RecipeApi.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { searchRecipe } = RecipeDetailSlice.actions;
export const selectedRecipe = (state) => state.Recipe.RecipeData;
export default RecipeDetailSlice.reducer;
