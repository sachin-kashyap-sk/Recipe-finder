import { configureStore } from "@reduxjs/toolkit";
import Recipe from "../../ReduxSection/RecipeDetail/RecipeDetailSlice";
import RecipeDescription from "../../ReduxSection/RecipeDetailData/RecipeDetailDataSlice";
export const Store = configureStore({
  reducer: {
    Recipe: Recipe,
    RecipeDescription: RecipeDescription,
  },
});
