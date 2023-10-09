import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const RecipeDetailData = createAsyncThunk(
  "https://api.edamam.com",

  async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=a76862bb&app_key=958fbf34058ee17e5ea471a2bffdfef8`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const RecipeApi = createAsyncThunk(
  "https://api.edamam.com",
  async (Data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${Data}&app_id=a76862bb&app_key=958fbf34058ee17e5ea471a2bffdfef8`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
