import React, { useState } from "react";
import classes from "../StylesContainer/RecipeSearch/RecipeSearch.module.css";
import RecipeList from "../RecipeList/RecipeList";
import { useDispatch } from "react-redux";
import { RecipeApi } from "../BackendApi/RecipeApi";
const RecipeSearch = () => {
  const dispatch = useDispatch();
  const [timeoutId, setTimeOutId] = useState();

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => dispatch(RecipeApi(e.target.value)), 500);
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
