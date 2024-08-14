import { useEffect, useState } from "react";
import FoodDetails from "../../model/FoodDetails";
import styles from "./fooddetails.module.css";
import FoodIngredientComponent from "../foodingredientcomponent/FoodIngredientComponent";

interface FoodDetailsComponentProps {
  foodId: number;
}

function FoodDetailsComponent({ foodId }: FoodDetailsComponentProps) {
  const [foodDetails, setFoodDetails] = useState<FoodDetails>();
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "07570e7b6d16404ba7d8dc92651d0dec";

  useEffect(() => {
    async function fetchFoodDetails() {
      // response from API
      const res = await fetch(`${URL}?&apiKey=${API_KEY}`);
      //   get structure from the response (json)
      const data = await res.json();
      console.log(data);
      setFoodDetails(data);
      setIsLoading(false);
    }
    fetchFoodDetails();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeTop}>
        <h1 className={styles.recipeName}>{foodDetails?.title}</h1>
        <img className={styles.recipeImage} src={foodDetails?.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{foodDetails?.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>
              {foodDetails?.vegetarian ? " 🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          {foodDetails?.vegan ? (
            <span>
              <strong>🪴 Vegan</strong>
            </span>
          ) : (
            ""
          )}
          <span>
            <strong>👩‍👧‍👦 Servings: {foodDetails?.servings}</strong>
          </span>
          <span>
            <strong>
              💰 Per Serving:{" "}
              {foodDetails?.pricePerServing
                ? "$" + (foodDetails?.pricePerServing / 100).toFixed(2)
                : "Unknown"}
            </strong>
          </span>
        </div>
      </div>
      <hr></hr>
      <FoodIngredientComponent
        foodDetails={foodDetails}
        isLoading={isLoading}
      />
      <h2 className={styles.recipeInstructionsTitle}>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Data is Loading</p>
          ) : (
            foodDetails?.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}

export default FoodDetailsComponent;
