import React, { useContext, useState } from "react";
import classes from "../styles-container/recipe-search/recipe-search.module.css";
import RecipeList from "../recipe-list";
import { RecipeContext } from "../search-context";

export const RecipeSearch = () => {
  const [timeoutId, setTimeOutId] = useState();
  const { setRecipeData } = useContext(RecipeContext);

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => {
      setRecipeData(e.target.value);
    }, 500);
    setTimeOutId(timeout);
  };

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.recipeTextContainer}>
          <p className={classes.recipeText}>Recipe Finder</p>
        </div>
        <div className={classes.inputContainer}>
          <input
            placeholder="Search your Recipe"
            className={classes.input}
            onChange={onTextChange}
          />
        </div>
      </div>
      <RecipeList />
    </div>
  );
};

export default RecipeSearch;
