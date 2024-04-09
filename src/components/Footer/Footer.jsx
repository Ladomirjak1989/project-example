import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='footer-container'>
        <p>+31619388895</p>
        <p>midas.restaurante@gmail.com</p>
        <div>
        <FaFacebookSquare/>
      <FaInstagram/>
      </div>
      </div>

      </div>
    </footer>
  )
}

export default Footer