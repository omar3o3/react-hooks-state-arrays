import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods , newFood];
    setFoods(newFoodArray);
  }

  const handleLiClick = (foodId) => {
    // const newFoodArray = foods.filter(food => food.id !== foodId);
    // setFoods(newFoodArray);

    const newFoodHeat = foods.map(food => {
      if (food.id === foodId){
        return {
          ...food,
          heatLevel: ++food.heatLevel,
        }
      }
      else {
        return food;
      };
    })
    console.log(newFoodHeat);
    setFoods(newFoodHeat)
  }

  const [filterby , setFilter] = useState('All')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const foodsToDisplay = foods.filter(food => {
    if (filterby === 'All'){
      return true
    } else {
      return food.cuisine === filterby
    }
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick = {() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  
  // const handleFilter = (event) => {
  //   console.log(event.target.value)
  //   let selectedValue = event.target.value;

  //   let selectedDropDown = foods.filter(food => {
  //     if (selectedValue === food.cuisine){
  //       return food
  //     }
  //   })
  //   setFoods(selectedDropDown)
  // }

  return (
    <div>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;

