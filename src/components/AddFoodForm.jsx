import React, { useState } from 'react';
import { Input, Divider } from 'antd';

import './AddFoodForm.css';

const AddFoodForm = ({addFood}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const myNewFood = {name, calories, image, servings}
    addFood(myNewFood)
    setName()
    setImage()
    setCalories()
    setServings()
  };
  return (
    <>
    <Divider>Add food entry</Divider>
      <form className="create-form" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <Input value={name} type="text" onChange={(e)=> {setName(e.target.value,)}} />
        <label htmlFor="">Image</label>
        <Input value={image} type="text" onChange={(e)=> {setImage(e.target.value,)}}/>
        <label htmlFor="">Calories</label>
        <Input value={calories} type="number" onChange={(e)=> {setCalories(e.target.value,)}}/>
        <label htmlFor="">Servings</label>
        <Input value={servings} type="number" onChange={(e)=> {setServings(e.target.value,)}}/>
        <Input value="Create" type="submit" />
      </form>
    </>
  );
};

export default AddFoodForm;
