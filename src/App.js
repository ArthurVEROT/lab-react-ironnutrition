import { useState } from 'react';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
    <h1>Food list</h1>
      {foodList.map((listItem) => {
        return <FoodBox key={listItem.name} {...listItem} />;
      })}
    </div>
  );
}

export default App;
