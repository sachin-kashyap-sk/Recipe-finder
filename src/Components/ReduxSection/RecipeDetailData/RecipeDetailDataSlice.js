import { createSlice } from "@reduxjs/toolkit";
import { RecipeDetailData } from "../../BackendApi/RecipeApi";
const initialState = {
  RecipeDetailData: null,
  loading: false,
  error: null,
  success: false,
};

const RecipeDetailSlice = createSlice({
  name: "RecipeDescription",
  initialState,

  reducers: {},

  extraReducers: {
    [RecipeDetailData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [RecipeDetailData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.RecipeData = payload;
    },

    [RecipeDetailData.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const selectedData = (state) => state.RecipeDescription.RecipeDetailData;
export default RecipeDetailSlice.reducer;
