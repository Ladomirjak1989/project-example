import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <p>+31619388895</p>
        <p>midas.restaurante@gmail.com</p>
      </div>
      <FaFacebookSquare className='face-book-style' />
      <FaInstagram className='instagram-style' />
    </footer>
  )
}

export default Footer