import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const PopUpBurgerMenu = ({ links }) => {

    return (
        <ul className='burger-list'>
            {links.map(item => (
                <li key={item.id}>
                    <Link to={`${item.link}`}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PopUpBurgerMenu