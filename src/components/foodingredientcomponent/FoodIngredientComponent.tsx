import FoodDetails from "../../model/FoodDetails";
import FoodIngredientItem from "./FoodIngredientItem";
import styles from "./FoodIngredientComponent.module.css";

interface FoodIngredientComponentProps {
  foodDetails: FoodDetails | undefined;
  isLoading: boolean;
}

function FoodIngredientComponent({
  foodDetails,
  isLoading,
}: FoodIngredientComponentProps) {
  return (
    <div className={styles.foodIngredientComponentContainer}>
      <h2 className={styles.ingredientsTitle}> Ingredients</h2>
      {isLoading ? (
        <p>Ingredients are loading!</p>
      ) : (
        foodDetails?.extendedIngredients.map((ingredient) => (
          <FoodIngredientItem ingredient={ingredient}/>
        ))
      )}
    </div>
  );
}

export default FoodIngredientComponent;
