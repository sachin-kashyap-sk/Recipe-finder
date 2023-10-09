import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RecipeDetailData } from "../BackendApi/RecipeApi";
import classes from "../StylesContainer/RecipeDetail/RecipeDetail.module.css";
import backArrow from "../../Assets/backArrow.png";
import { useNavigate } from "react-router-dom";
const RecipeDetail = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { RecipeData } = useSelector((state) => state.RecipeDescription);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(RecipeDetailData(id));
    }
  }, [id, dispatch]);

  return null !== RecipeData && RecipeData?.recipe ? (
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
              src={RecipeData.recipe.image}
              alt="Recipe-images"
            />
            <div className={classes.secContainer}>
              <p className={classes.labelText}>
                Recipe name : {RecipeData.recipe.label}
              </p>
              <p className={classes.labelText}>
                Diet : {RecipeData.recipe.dietLabels}
              </p>
              <p className={classes.labelText}>Ingredients</p>
              {RecipeData.recipe.ingredientLines.map((item) => (
                <div key={item}>
                  <p className={classes.ingredientText}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "2%" }}>
          <p className={classes.labelText}>
            Cuisine Type : {RecipeData.recipe.cuisineType}
          </p>
        </div>
        <p className={classes.labelText}>
          Meal Type : {RecipeData.recipe.mealType}
        </p>

        <p className={classes.labelText}>
          Dish Type : {RecipeData.recipe.dishType}
        </p>
        <p className={classes.labelText}>Total Nutrients</p>
        <div className={classes.nutrientsContainer}>
          {Object.values(RecipeData?.recipe?.totalNutrients).map((item) => (
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
