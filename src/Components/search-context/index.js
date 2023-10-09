import { createContext, useReducer } from "react";
import axios from "axios";
export const initialState = {
  recipeData: null,
  recipeDetail: null,
  loading: false,
  error: null,
  success: null,
  setRecipeData: () => null,
  setLoading: () => null,
  setRecipeDetail: () => null,
};

export const RecipeContext = createContext(initialState);

const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload };
    case "SET_RECIPE_DATA":
      return { ...state, recipeData: payload };
    case "SET_RECIPE_DETAIL_DATA":
      return { ...state, recipeDetail: payload };
    default:
      throw new Error(`No case for type ${type} found in RecipeReducer.`);
  }
};

export const RecipeProvider = (props) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const fetchRecipeData = async (Data) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${Data}&app_id=a76862bb&app_key=958fbf34058ee17e5ea471a2bffdfef8`
    );
    return response;
  };

  const setRecipeData = async (payload) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await fetchRecipeData(payload);
      dispatch({ type: "SET_RECIPE_DATA", payload: data });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      dispatch({ type: "SET_LOADING", payload: true });
    }
  };

  const fetchRecipeDetail = async (id) => {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=a76862bb&app_key=958fbf34058ee17e5ea471a2bffdfef8`
    );
    return response;
  };

  const setRecipeDetail = async (id) => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const { data } = await fetchRecipeDetail(id);
      dispatch({ type: "SET_RECIPE_DETAIL_DATA", payload: data });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const setLoading = (payload) => {
    dispatch({ type: "SET_LOADING", payload });
  };
  const createContextVal = {
    recipeData: state.recipeData,
    recipeDetail: state.recipeDetail,
    loading: state.loading,
    error: state.error,
    setRecipeData,
    setLoading,
    setRecipeDetail,
  };
  return (
    <RecipeContext.Provider value={createContextVal}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
