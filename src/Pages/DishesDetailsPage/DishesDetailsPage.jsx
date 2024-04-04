import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './DishesDetailsPage.css'
import { useNavigate, Link } from 'react-router-dom'
import { IoIosCheckmarkCircle } from "react-icons/io";


const API_URL = 'https://restaurante.adaptable.app'

const DishesDetailsPage = () => {
  const navigate = useNavigate();
  const [isPopUpOpen, setPopUpOpen] = useState(false)
  const { dishId, dishes } = useParams()
  const [dish, setDish] = useState({})
  const [message, setMessage] = useState(null)
  const getOneDishes = () => {
    axios
      .get(`${API_URL}/${dishes}/${dishId}`)
      .then((response) => setDish(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getOneDishes()
  }, [dishId, dishes])

  useEffect(() => {
    if (isPopUpOpen) {
      setTimeout(() => {
        setPopUpOpen(false)
        navigate(`/${dishes}`)
      }, 3000)
    }
  }, [isPopUpOpen])

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/${dishes}/${dishId}`)
      .then((response) => {
        setMessage({ message: 'succesful delete' })
        setPopUpOpen(true)
      })
      .catch((error) => console.log(error));
  }

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
          {isPopUpOpen && <div className='message'>
            <IoIosCheckmarkCircle />{message.message}</div>}
        </div>
        <div className='page-item-btn-wrapper'>

          <Link className='btn-style' to={`/update/${dishes}/${dish.id}`}>
            edit
          </Link>
          <button className='btn-style' onClick={handleDelete}>Delete</button>
          <button className='btn-style' onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </div>
  )
}

export default DishesDetailsPage