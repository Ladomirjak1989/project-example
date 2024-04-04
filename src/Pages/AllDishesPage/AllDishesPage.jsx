import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import './AllDishesPage.css'

const API_URL = 'https://restaurante.adaptable.app'

const AllDishesPage = () => {
  const [dishes, setDishes] = useState([])
  // const params = useParams()
  const { dishes: category } = useParams()
  const getAllDishes = () => {
    axios
      .get(`${API_URL}/${category}`)
      // /${params.dishes} (all 'category' change to the 'params.dishes')
      .then((response) => setDishes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllDishes()
  }, [category])
  return (
    <div className='all-dishes'>
      <div className='container'>
        <ul className='all-dishes-list'>
          {dishes.map((dish) => (
            <li key={dish.id}>

              <img src={dish.imgUrl} alt={dish.name} />
              <h4>{dish.name}</h4>
              <p>&#8364;{dish.price}</p>

              <Link className='all-dishes-link' to={`/${category}/${dish.id}`}>
                Show more information
              </Link>
            </li>
          )

          )}
        </ul>
      </div>
    </div>
  )
}

export default AllDishesPage
