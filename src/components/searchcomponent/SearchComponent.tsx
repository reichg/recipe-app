import { useEffect, useState } from "react";
import FoodItem from "../../model/FoodItem";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8eba740cb2114f54a94a3fa32132ee64";

interface SearchComponentProps {
  foodData?: FoodItem[];
  setFoodData: (foodData: FoodItem[]) => void;
}

function SearchComponent({ /*foodData*/ setFoodData }: SearchComponentProps) {
  // hoooks should only be called within a component.
  //
  const [query, setQuery] = useState("pizza");

  // syntax for use effect (callback, list of dependencies)
  useEffect(() => {
    async function fetchFood() {
      // response from API
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //   get structure from the response (json)
        const data = await res.json();
      //   console.log(data);
        setFoodData(data.results);
    }
    fetchFood();
  }, []);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchTextbox}
        // need the type of input
        type="text"
        // query will be used as value
        value={query}
        //on change for when the input changes
        onChange={(e) =>
          // easy way to get input target value
          setQuery(e.target.value)
        }
      ></input>
    </div>
  );
}

export default SearchComponent;
