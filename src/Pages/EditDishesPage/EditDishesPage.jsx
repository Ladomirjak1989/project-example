import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './EditDishesPage.css'
import { useParams } from 'react-router-dom';

const API_URL = "https://restaurante.adaptable.app";
const options = [{ id: '1', title: 'Main Course', value: 'maincourse' }, { id: '2', title: 'Soup Course', value: 'soupcourse' }, { id: '3', title: 'Desserts', value: 'desserts' }, { id: '4', title: 'Drinks', value: 'drinks' }]

const EditDishesPage = () => {
    const {dishes, dishId} = useParams()

  const navigate = useNavigate();

  const [dish, setDish] = useState({})

  const [name, setName] = useState('')
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("maincourse");
  const [imgUrl, setImgUrl] = useState("");

  const editDish = (formData) => {
    axios
      .put(`${API_URL}/${category}/${dishId}`, formData)
      .then((response) => setDish(response.data))
      .catch((error) => console.log(error));

  };
  const getOneDishes = () => {
    axios
      .get(`${API_URL}/${dishes}/${dishId}`)
      .then((response) => {
        
        setDish(response.data)
      })
      .catch((error) => console.log(error));
  }
  useEffect(()=> {
    getOneDishes()

  },[dishes,dishId])

  useEffect(()=> {
    setName(dish.name)
    setWeight(dish.weight)
    setDescription(dish.description)
    setPrice(dish.price)
    setCategory(dish.category)
    setImgUrl(dish.imgUrl)
  },[dish])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = { name, weight, imgUrl: imgUrl || 'https://img.freepik.com/premium-photo/turkish-bistro-restaurant-with-various-traditional-dishes-generative-ai_881377-2681.jpg', description, price, category, }

    editDish(formData)
    navigate(`/${category}`)
  }
  console.log(dish)
  return (
    <main className='add-page-name'>
      <div className='container'>

        <form className='addDishForm' onSubmit={handleSubmit}>


          <label className='addDishLabel' htmlFor="name">Name</label>
          <input className='addAllDishInput' name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />

          <label htmlFor="imgUrl">Image Url</label>
          <input className='addAllDishInput' name="imgUrl" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} type="text" id="imgUrl" />

          {category !== 'drinks' && <><label htmlFor="weight">Weight</label>
          <input className='addAllDishInput' name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} type="text" id="weight" /></>}

          <label htmlFor="description">Description</label>
          <input className='addAllDishInput' name="description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="descriptiont" />

          <label htmlFor="price">Price</label>
          <input className='addAllDishInput' name="price" value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="price" />

          <label htmlFor="category">Category</label>


          <select className='addAllDishSelect' name="category" id="category" onChange={(e) => setCategory(e.target.value)} value={category}>
            {options.map(option => (
              <option
                key={option.id}
                value={option.value}
              >{option.title}</option>
            ))}
          </select>
          <button className='button-style' type="submit">
            Add Dish
          </button>

        </form>
      </div>
    </main>
  )
}

export default EditDishesPage