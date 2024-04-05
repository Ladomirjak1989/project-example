import React from 'react'
import { Link } from 'react-router-dom';
import Icon from "../../assets/round-restaurant-icon-vector-2173734.jpg";
import './Navbar.css';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import PopUpBurgerMenu from './PopUpBurgerMenu';

const categoryLink = [
  { id: '101', title: 'Main Course', link: '/maincourse' },
  { id: '102', title: 'Soup Course', link: '/soupcourse' },
  { id: '103', title: 'Desserts', link: '/desserts' },
  { id: '104', title: 'Drinks', link: '/drinks', },
  { id: '105', title: 'New', link: '/new' },
  { id: '106', title: 'Dish of the day', link: '/random' }
]

const Navbar = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [isBurgerMenu, setBurgerMenu] = useState(false)

const [isPopUpBurgerMenu, setPopUpBurgerMenu] = useState(false)

  useEffect(() => {
    const resizeHandler = () => setSize(window.innerWidth);
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(()=> {
    if (size < 767) setBurgerMenu(true)
    if (size >= 768) setBurgerMenu(false)
  },[size])

  console.log(size)
  
  return (
    

    <div>
      <nav className='nav'>
        <Link className='' to='/'>
          <img className='icon-style' src={Icon} alt="icon" />
        </Link>
        {!isBurgerMenu && <ul className='nav-list'>
          {categoryLink.map(item => (
            <li key={item.id}>
              <Link to={`${item.link}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>}
        {isBurgerMenu && !isPopUpBurgerMenu && <GiHamburgerMenu className='nav-item' onClick={()=> {
          setPopUpBurgerMenu(true)
        }} />}
        {isPopUpBurgerMenu && isBurgerMenu && <RxCross2 className='nav-item' onClick={()=> {
          setPopUpBurgerMenu(false)
        }} />}
        {isPopUpBurgerMenu && isBurgerMenu && <PopUpBurgerMenu links={categoryLink}/>}
      </nav>

      
  
    </div>

  )
}

export default Navbar