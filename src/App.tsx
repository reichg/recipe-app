import { useState } from "react";
import SearchComponent from "./components/searchcomponent/SearchComponent";
import FoodList from "./components/foodlist/FoodListComponent";
import FoodItem from "./model/FoodItem";
import TopNav from "./components/topnav/TopNavComponent";
import "./app.css";
import Container from "./components/container/ContainerComponent";
import InnerContainer from "./components/container/InnerContainerComponent";
import FoodDetailsComponent from "./components/fooddetails/FoodDetailsComponent";

function App() {
  const [foodData, setFoodData] = useState<FoodItem[]>();

  // pass down foodId to food details
  // pass down setFoodId to FoodList and other children
  const [foodId, setFoodId] = useState(-1);

  return (
    <>
      <TopNav />
      <SearchComponent foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetailsComponent foodId={foodId}/>
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
