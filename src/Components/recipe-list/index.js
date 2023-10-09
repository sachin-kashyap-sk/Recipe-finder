import React, { useContext } from "react";
import classes from "../styles-container/recipe-list/recipe-list.module.css";
import { useNavigate } from "react-router-dom";
import recipeSearch from "../../Assets/searchRecipe.jpg";
import { RecipeContext } from "../search-context";
const RecipeList = () => {
  const { recipeData } = useContext(RecipeContext);
  const navigation = useNavigate();
  return (
    <div>
      <div className={classes.mainContainer}>
        {recipeData?.hits?.length ? (
          recipeData?.hits?.map((item) => (
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
                    navigation(`/recipeDetail/${id[1]}`);
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
