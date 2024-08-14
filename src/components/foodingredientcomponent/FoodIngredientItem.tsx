import styles from "./foodingredientitem.module.css";

interface FoodIngredientItemProps {
  ingredient: {
    image: string;
    original: string;
  };
}

function FoodIngredientItem({ ingredient }: FoodIngredientItemProps) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
          />
        </div>
        <div className={styles.measurementContainer}>{ingredient.original}</div>
      </div>
    </div>
  );
}

export default FoodIngredientItem;
