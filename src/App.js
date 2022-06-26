import { useState } from 'react';
import './App.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Divider } from 'antd';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [foodList, setFoodList] = useState(allFoods);

  const addFood = (newFood) => {
    setAllFoods([...allFoods, newFood]);
  };

  const filterFood = (element) => {
    const filteredList = allFoods.filter((listItem) => {
      return listItem.name.toLowerCase().includes(element.toLowerCase());
    });
    setFoodList(filteredList);
  };

  const deleteFood = (food) => {
    const filteredFoods = foodList.filter((x) => x !== food);
    setFoodList(filteredFoods);
  };

  return (
    <div className="App">
      <div className="section">
        <AddFoodForm addFood={addFood} />
      </div>
      <div className="section">
        <Search filterFood={filterFood} />
      </div>
      <div className="section">
        <Divider>Food list</Divider>
        <div className="allFood">
          {foodList.map((listItem) => {
            return (
              <FoodBox
                key={listItem.name}
                deleteFood={deleteFood}
                listItem={listItem}
                {...listItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
