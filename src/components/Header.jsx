import React from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Header() {
  return (
  <div className='logo-bar'>  
    <div className='flex-row' >
        <img className='logo' src="./src/images/logo.png" alt="" />
        <p className='logo-text'>Lotus Ticaret</p>
    </div>

    <div>
      <input className='search-input' type="text" placeholder='Bir Şeyler Ara...'/>
      <div>
      <CiLight />
      <FaMoon />
      <CiShoppingBasket />
      </div>
      
    </div>

    </div>
  )
}

export default Header