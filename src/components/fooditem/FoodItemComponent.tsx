import FoodItem from "../../model/FoodItem";
import styles from "./fooditem.module.css";

interface FoodItemComponentProps {
  foodItem: FoodItem;
  setFoodId: (foodItemId: number) => void
}

function FoodItemComponent({ foodItem, setFoodId }: FoodItemComponentProps) {
  return (
    <div className={styles.foodfItemContainer}>
      <img className={styles.itemImg} src={foodItem.image}></img>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
      <div className={styles.viewRecipeButtonContainer}>
        <button
          className={styles.viewRecipeButton}
          onClick={() => setFoodId(foodItem.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItemComponent;
