import { useEffect, useState } from "react";
import FoodDetails from "../../model/FoodDetails";

interface FoodDetailsComponentProps {
  foodId: number;
}

function FoodDetailsComponent({ foodId }: FoodDetailsComponentProps) {
  const [foodDetails, setFoodDetails] = useState<FoodDetails>();

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "8eba740cb2114f54a94a3fa32132ee64";

  useEffect(() => {
    async function fetchFoodDetails() {
      // response from API
      const res = await fetch(`${URL}?&apiKey=${API_KEY}`);
      //   get structure from the response (json)
      const data = await res.json();
      console.log(data);
      setFoodDetails(data);
    }
    // fetchFoodDetails();
  }, [foodId]);

  return (
    <div>
      {foodId}
      <h1>{foodDetails?.title}</h1>
      <img src={foodDetails?.image}></img>
    </div>
  );
}

export default FoodDetailsComponent;
