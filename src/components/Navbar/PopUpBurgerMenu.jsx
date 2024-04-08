import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

const PopUpBurgerMenu = ({ links, onClick }) => {

    return (
        <ul className='burger-list'>
            {links.map(item => (
                <li key={item.id}>
                    <Link to={`${item.link}`} onClick={()=> onClick(false)}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default PopUpBurgerMenu