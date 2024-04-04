import React, { useState, useEffect } from 'react';
import axios from "axios";

const API_URL = "https://restaurante.adaptable.app";

function RandomDishesPage() {

  const [dish, setDish] = useState({})
  
  const getOneDish = (dishId) => {
    axios
      .get(`${API_URL}/random/${dishId}`)
      .then((response) => setDish(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 35)
    getOneDish(randomIndex)
  }, [])

  return (
    <div className='details-page'>
      <div className='container'>
        <div className='page-item'>
          <img src={dish.imgUrl} alt={dish.name} />
          <h4>Name: {dish.name}</h4>
          <p>Price: &#8364;{dish.price}</p>
          <p>Weight: {dish.weight}</p>
          <p>Description: {dish.description}</p>
          <p>Category: {dish.category}</p>
        </div>
      </div>
    </div>
  )
}

export default RandomDishesPage