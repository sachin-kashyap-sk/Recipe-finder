import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "../styles-container/recipe-detail/recipe-detail.module.css";
import backArrow from "../../Assets/backArrow.png";
import { useNavigate } from "react-router-dom";
import { RecipeContext } from "../search-context";
export const RecipeDetail = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const { setRecipeDetail, recipeDetail } = useContext(RecipeContext);

  useEffect(() => {
    if (id) {
      setRecipeDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return null !== recipeDetail && recipeDetail?.recipe ? (
    <div className={classes.mainContainer}>
      <div className={classes.cardContainer}>
        <div className={classes.firstContainer}>
          <div>
            <img
              width="32px"
              height="32px"
              onClick={() => {
                navigation("/");
              }}
              src={backArrow}
              alt="backArrow"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              width="500"
              height="auto"
              src={recipeDetail.recipe.image}
              alt="Recipe-images"
            />
            <div className={classes.secContainer}>
              <p className={classes.labelText}>
                Recipe name : {recipeDetail.recipe.label}
              </p>
              <p className={classes.labelText}>
                Diet : {recipeDetail.recipe.dietLabels}
              </p>
              <p className={classes.labelText}>Ingredients</p>
              {recipeDetail.recipe.ingredientLines.map((item) => (
                <div key={item}>
                  <p className={classes.ingredientText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "2%" }}>
          <p className={classes.labelText}>
            Cuisine Type : {recipeDetail.recipe.cuisineType}
          </p>
        </div>
        <p className={classes.labelText}>
          Meal Type : {recipeDetail.recipe.mealType}
        </p>

        <p className={classes.labelText}>
          Dish Type : {recipeDetail.recipe.dishType}
        </p>
        <p className={classes.labelText}>Total Nutrients</p>
        <div className={classes.nutrientsContainer}>
          {Object.values(recipeDetail?.recipe?.totalNutrients).map((item) => (
            <div className={classes.thirdContainer} key={item.label}>
              <p>{item.label}</p>
              <p className={classes.unit}>
                {parseFloat(item.quantity).toFixed(2) + " " + item.unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};
export default RecipeDetail;
