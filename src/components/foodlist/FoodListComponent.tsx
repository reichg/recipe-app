import FoodItemComponent from "../fooditem/FoodItemComponent";
import FoodItem from "../../model/FoodItem";

interface FoodListProps {
  foodData?: FoodItem[];
  setFoodId: (foodItemId: number) => void;
}

function FoodList({ foodData, setFoodId }: FoodListProps) {
  return (
    <div>
      {foodData?.map((foodItem) => (
        <FoodItemComponent
          key={foodItem.id}
          foodItem={foodItem}
          setFoodId={setFoodId}
        />
      ))}
    </div>
  );
}

export default FoodList;
