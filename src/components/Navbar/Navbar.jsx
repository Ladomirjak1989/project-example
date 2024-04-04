import React from 'react'
import { Link } from 'react-router-dom';
import Icon from "../../assets/round-restaurant-icon-vector-2173734.jpg";
import './Navbar.css';

const categoryLink = [
  { id: '101', title: 'Main Course', link: '/maincourse'}, 
  {id: '102', title: 'Soup Course', link: '/soupcourse'}, 
  {id: '103', title: 'Desserts', link: '/desserts'}, 
  {id: '104', title: 'Drinks', link: '/drinks', },
  {id: '105', title: 'New', link: '/new'},
  {id: '106', title: 'Dish of the day', link: '/random'}
]

const Navbar = () => {
  return (

    <div>
      <nav className='nav'>
        <Link className='' to='/'>
          <img className='icon-style' src={Icon} alt="icon" />
        </Link>
        <ul className='nav-list'>
          {categoryLink.map(item => (
            <li key={item.id}>
              <Link to={`${item.link}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>

  )
}

export default Navbar