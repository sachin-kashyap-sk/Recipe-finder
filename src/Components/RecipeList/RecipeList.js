import React from "react";
import classes from "../StylesContainer/RecipeList/RecipeList.module.css";
import { useNavigate } from "react-router-dom";
import { selectedRecipe } from "../ReduxSection/RecipeDetail/RecipeDetailSlice";
import { useSelector } from "react-redux";
import recipeSearch from "../../Assets/searchRecipe.jpg";
const RecipeList = () => {
  const RecipeData = useSelector(selectedRecipe);
  const navigation = useNavigate();
  return (
    <div>
      <div className={classes.mainContainer}>
        {RecipeData?.hits?.length ? (
          RecipeData?.hits?.map((item) => (
            <div className={classes.card} key={item.recipe.uri}>
              <img
                style={{ borderRadius: "10px" }}
                src={item.recipe.image}
                alt="images"
              />
              <p className={classes.title}>{item.recipe.label}</p>
              <div className={classes.btnContainer}>
                <button
                  onClick={() => {
                    const id = item.recipe.uri.split("#");
                    navigation(`/RecipeDetail/${id[1]}`);
                  }}
                  className={classes.btn}
                >
                  Full Description
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <img
              width="100%"
              height="auto"
              src={recipeSearch}
              alt="recipeSearch"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
